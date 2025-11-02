# Nodemailer Demo

A full-stack demo application showing how to send emails using Nodemailer with a React frontend and Node.js/Express backend.

## Features

- React frontend with email form (To, Subject, Message)
- Node.js/Express backend with Nodemailer integration
- Support for any SMTP provider

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
npm run install-client
```

### 2. Build

```bash
npm run build
```

### 3. Environment Configuration - Update the `.env` file with your SMTP settings. See `.env.example`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=your-email@gmail.com
PORT=5000
```

- Our example will use gmail. For other email domains, see "SMTP Providers" section below

### 4. Gmail Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password at https://myaccount.google.com/apppasswords:
   - Enter any app name. This will not be important.
   - This will generate a password. Keep this for safekeeping.
   - Use this password in `SMTP_PASS`
3. For other email domains, see "SMTP Providers" section below

### 5. Run the Application

```bash
npm run dev
```

### NOTE: Production mode

- There has been multiple reports of nodemailer working locally but not in production
- If this is you, try wrapping the transporter in a promise like so:

```js
await new Promise((resolve, reject) => {
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.error(err);
      reject(err);
    } else {
      resolve(info);
    }
  });
});
```

- See [here](https://stackoverflow.com/questions/73295705/why-nodemailer-is-working-locally-but-not-in-production) for more

## API Endpoints

### POST /send-email

Send an email via the configured SMTP server.

**Request Body:**

```json
{
  "to": "recipient@example.com",
  "subject": "Email Subject",
  "text": "Plain text message"
}
```

**Response:**

```json
{
  "success": true,
  "messageId": "message-id-from-smtp"
}
```

## SMTP Providers

### Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Outlook/Hotmail

```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo

```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

## Security Notes

- Never commit your `.env` file to version control
- Use app-specific passwords instead of your main email password
- Consider using environment variables in production
- Implement rate limiting for production use

## Troubleshooting

1. **Authentication Error**: Make sure you're using an app password, not your regular email password
2. **Connection Timeout**: Check your SMTP host and port settings
3. **CORS Error**: Ensure the backend is running on port 5000
4. **SSL/TLS Issues**: Try toggling the `SMTP_SECURE` setting
