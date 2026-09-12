# Guericke Gebäudetechnik

Mehrseitige Firmenwebsite als Node.js/Express-Webservice, vorbereitet für Render.

## Lokal starten

```bash
npm install
npm start
```

Danach: `http://localhost:10000`

## Kontaktformular aktivieren

In Render folgende Environment Variables setzen:

- `SMTP_HOST`
- `SMTP_PORT` (meist `587`)
- `SMTP_SECURE` (`false` für Port 587, `true` für Port 465)
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `CONTACT_TO`

Telefonnummer und sichtbare E-Mail-Adresse werden zentral in `public/assets/site.js` eingetragen.
