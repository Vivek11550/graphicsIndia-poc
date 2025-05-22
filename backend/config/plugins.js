module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.gmail.com'),
        port: env.int('SMTP_PORT', 465),
        secure: true,
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD')
        },
        tls: {
          rejectUnauthorized: env.bool('SMTP_VALIDATE_CERT', false)
        }
      },
      settings: {
        defaultFrom: env('SMTP_FROM_EMAIL'),
        defaultReplyTo: env('SMTP_FROM_EMAIL')
      }
    }
  }
});