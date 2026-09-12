import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '32kb' }));
app.use(express.static(path.join(__dirname, 'dist')));

// --- Rate limiting (in-memory, per IP) ---
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection?.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip) || { count: 0, first: now };

  if (now - entry.first > RATE_LIMIT_WINDOW) {
    entry.count = 0;
    entry.first = now;
  }

  entry.count++;
  rateLimitMap.set(ip, entry);

  if (entry.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  next();
}

// --- Validation helpers ---
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 200;
}

function sanitize(str, maxLen) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLen);
}

// --- Contact API ---
app.post('/api/contact', rateLimit, async (req, res) => {
  try {
    const {
      firstName, lastName, phone, email, address, zip, city,
      subject, service, message, consent,
    } = req.body;

    // Honeypot check
    if (req.body.website) {
      return res.status(200).json({ success: true });
    }

    // Time-based bot protection (min 2 seconds to fill form)
    const formTime = req.body._time;
    if (formTime && Date.now() - formTime < 2000) {
      return res.status(200).json({ success: true });
    }

    // Validate required fields
    const errors = [];
    if (!sanitize(firstName, 100)) errors.push('firstName');
    if (!sanitize(lastName, 100)) errors.push('lastName');
    if (!sanitize(phone, 50)) errors.push('phone');
    if (!sanitize(email, 200) || !isValidEmail(email || '')) errors.push('email');
    if (!sanitize(subject, 200)) errors.push('subject');
    if (!service) errors.push('service');
    if (!sanitize(message, 2000)) errors.push('message');
    if (!consent) errors.push('consent');

    if (errors.length > 0) {
      return res.status(400).json({ error: 'Validation failed', fields: errors });
    }

    const cleanData = {
      firstName: sanitize(firstName, 100),
      lastName: sanitize(lastName, 100),
      phone: sanitize(phone, 50),
      email: sanitize(email, 200),
      address: sanitize(address, 200),
      zip: sanitize(zip, 20),
      city: sanitize(city, 100),
      subject: sanitize(subject, 200),
      service: sanitize(service, 50),
      message: sanitize(message, 2000),
    };

    const now = new Date();
    const dateTime = now.toLocaleString('de-AT', { timeZone: 'Europe/Vienna' });

    const fullName = `${cleanData.firstName} ${cleanData.lastName}`;
    const emailSubject = `Neue Website-Anfrage – ${cleanData.service} – ${fullName}`;

    const emailBody = [
      `Neue Anfrage über guericke.at`,
      ``,
      `Name: ${fullName}`,
      `Telefon: ${cleanData.phone}`,
      `E-Mail: ${cleanData.email}`,
      `Adresse: ${cleanData.address || '-'}`,
      `PLZ: ${cleanData.zip || '-'}`,
      `Ort: ${cleanData.city || '-'}`,
      `Leistung: ${cleanData.service}`,
      `Betreff: ${cleanData.subject}`,
      ``,
      `Nachricht:`,
      `${cleanData.message}`,
      ``,
      `Datum: ${dateTime}`,
    ].join('\n');

    // Send email if SMTP is configured
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: parseInt(process.env.SMTP_PORT || '587', 10) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        subject: emailSubject,
        text: emailBody,
        replyTo: cleanData.email,
      });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    // Never expose internal errors to the client
    console.error('Contact form error:', err);
    return res.status(500).json({ error: 'An internal error occurred.' });
  }
});

// SPA fallback - must be last
app.get('/{*splat}', (req, res, next) => {
  // Skip API routes
  if (req.path.startsWith('/api/')) {
    return next();
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Guericke Gebäudetechnik server running on port ${PORT}`);
});
