import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const serviceOptions = [
  'Gas',
  'Wasser / Sanitär',
  'Heizung',
  'Thermenservice',
  'Fernwärme',
  'Reparatur',
  'Wartung',
  'Störung',
  'Sonstiges',
];

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  zip: string;
  city: string;
  subject: string;
  service: string;
  message: string;
  consent: boolean;
  website: string; // honeypot
}

const initialForm: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  zip: '',
  city: '',
  subject: '',
  service: '',
  message: '',
  consent: false,
  website: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!form.firstName.trim()) e.firstName = 'Bitte geben Sie Ihren Vornamen ein.';
    if (!form.lastName.trim()) e.lastName = 'Bitte geben Sie Ihren Nachnamen ein.';
    if (!form.phone.trim()) e.phone = 'Bitte geben Sie Ihre Telefonnummer ein.';
    if (!form.email.trim()) {
      e.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    if (!form.subject.trim()) e.subject = 'Bitte geben Sie einen Betreff ein.';
    if (!form.service) e.service = 'Bitte wählen Sie eine Leistung.';
    if (!form.message.trim()) e.message = 'Bitte geben Sie eine Nachricht ein.';
    if (form.message.length > 2000) e.message = 'Die Nachricht ist zu lang (max. 2000 Zeichen).';
    if (!form.consent) e.consent = 'Bitte stimmen Sie der Datenverarbeitung zu.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot
    if (form.website) return;

    if (!validate()) return;

    setStatus('submitting');

    try {
      const payload = {
        firstName: form.firstName.trim().slice(0, 100),
        lastName: form.lastName.trim().slice(0, 100),
        phone: form.phone.trim().slice(0, 50),
        email: form.email.trim().slice(0, 200),
        address: form.address.trim().slice(0, 200),
        zip: form.zip.trim().slice(0, 20),
        city: form.city.trim().slice(0, 100),
        subject: form.subject.trim().slice(0, 200),
        service: form.service,
        message: form.message.trim().slice(0, 2000),
        consent: form.consent,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border border-anthracite/10 p-8 lg:p-10 text-center">
        <CheckCircle2 size={48} className="text-copper mx-auto mb-4" />
        <h3 className="font-serif text-xl text-navy mb-2">Anfrage gesendet</h3>
        <p className="text-sm text-anthracite/70 leading-relaxed mb-6">
          Vielen Dank für Ihre Anfrage. Wir werden uns so rasch wie möglich bei
          Ihnen melden.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-secondary"
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-anthracite/10 p-6 lg:p-8 space-y-5"
      noValidate
    >
      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 text-sm text-red-800">
          <AlertCircle size={18} className="flex-shrink-0 mt-0.5" />
          <span>
            Ihre Nachricht konnte leider nicht gesendet werden. Bitte versuchen
            Sie es erneut oder kontaktieren Sie uns telefonisch.
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="label-text">
          Vorname <span className="text-copper">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={form.firstName}
            onChange={handleChange}
            className="input-field"
            maxLength={100}
            aria-required="true"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="label-text">
          Nachname <span className="text-copper">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={form.lastName}
            onChange={handleChange}
            className="input-field"
            maxLength={100}
            aria-required="true"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="label-text">
          Telefonnummer <span className="text-copper">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            className="input-field"
            maxLength={50}
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-xs text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="label-text">
          E-Mail-Adresse <span className="text-copper">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
            maxLength={200}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="address" className="label-text">
          Straße / Adresse <span className="text-anthracite/40 text-xs">(optional)</span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          className="input-field"
          maxLength={200}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="zip" className="label-text">
          PLZ
          </label>
          <input
            id="zip"
            name="zip"
            type="text"
            value={form.zip}
            onChange={handleChange}
            className="input-field"
            maxLength={20}
          />
        </div>
        <div>
          <label htmlFor="city" className="label-text">
          Ort
          </label>
          <input
            id="city"
            name="city"
            type="text"
            value={form.city}
            onChange={handleChange}
            className="input-field"
            maxLength={100}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label-text">
        Betreff <span className="text-copper">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={form.subject}
          onChange={handleChange}
          className="input-field"
          maxLength={200}
          aria-required="true"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && (
          <p className="text-xs text-red-600 mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="service" className="label-text">
        Gewünschte Leistung <span className="text-copper">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="input-field"
          aria-required="true"
          aria-invalid={!!errors.service}
        >
          <option value="">Bitte wählen</option>
          {serviceOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs text-red-600 mt-1">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="label-text">
        Nachricht <span className="text-copper">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          className="input-field min-h-[120px] resize-y"
          maxLength={2000}
          aria-required="true"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="text-xs text-red-600 mt-1">{errors.message}</p>
        )}
      </div>

      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={form.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 border border-anthracite/30 text-navy focus:ring-1 focus:ring-navy"
            aria-required="true"
            aria-invalid={!!errors.consent}
          />
          <span className="text-sm text-anthracite/70 leading-relaxed">
            Ich stimme der Verarbeitung meiner Daten zur Bearbeitung meiner
            Anfrage gemäß Datenschutzerklärung zu.{' '}
            <span className="text-copper">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-xs text-red-600 mt-1">{errors.consent}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          'Wird gesendet...'
        ) : (
          <>
            <Send size={16} />
            Anfrage senden
          </>
        )}
      </button>
    </form>
  );
}
