const path = require("path");
const express = require("express");
const helmet = require("helmet");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 10000;
const publicDir = path.join(__dirname, "public");

app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: false, limit: "20kb" }));
app.use(express.static(publicDir, { extensions: ["html"] }));

const clean = (value, length = 1000) => String(value || "").trim().slice(0, length);

app.post("/api/contact", async (req, res) => {
  const name = clean(req.body.name, 120);
  const email = clean(req.body.email, 180);
  const phone = clean(req.body.phone, 80);
  const service = clean(req.body.service, 120);
  const message = clean(req.body.message, 3000);
  const privacy = req.body.privacy === true || req.body.privacy === "on";

  if (!name || !email || !message || !privacy || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ ok: false, message: "Bitte füllen Sie alle Pflichtfelder korrekt aus." });
  }

  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS", "CONTACT_TO"];
  if (required.some((key) => !process.env[key])) {
    console.log("Kontaktanfrage (E-Mail noch nicht konfiguriert):", { name, email, phone, service, message });
    return res.status(503).json({ ok: false, message: "Das Formular ist noch nicht freigeschaltet. Bitte kontaktieren Sie uns telefonisch oder per E-Mail." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `Neue Anfrage von ${name} – ${service || "Allgemein"}`,
      text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || "–"}\nLeistung: ${service || "–"}\n\n${message}`
    });
    return res.json({ ok: true, message: "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt." });
  } catch (error) {
    console.error("E-Mail-Versand fehlgeschlagen:", error.message);
    return res.status(500).json({ ok: false, message: "Die Nachricht konnte gerade nicht gesendet werden. Bitte versuchen Sie es später erneut." });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use((_req, res) => res.status(404).sendFile(path.join(publicDir, "404.html")));

app.listen(port, "0.0.0.0", () => console.log(`Guericke Gebäudetechnik läuft auf Port ${port}`));
