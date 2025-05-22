module.exports = {
    async afterCreate(event) {
      try {
        const { result } = event;
  
        // Admin Notification Email
        await strapi.plugins.email.services.email.send({
          to: 'vivekkumar11550@gmail.com',
          from: process.env.SMTP_FROM_EMAIL,
          subject: `New Form Submission: ${result.subject}`,
          html: `
            <h1 style="color: #4a5568;">New Contact Form Submission</h1>
            <div style="background-color: #f7fafc; padding: 1.5rem; border-radius: 0.5rem;">
              <p><strong style="color: #2d3748;">Name:</strong> ${result.name}</p>
              <p><strong style="color: #2d3748;">Email:</strong> ${result.email}</p>
              <p><strong style="color: #2d3748;">Location:</strong> ${result.location || 'Not provided'}</p>
              <p><strong style="color: #2d3748;">Budget:</strong> ${result.budget}</p>
              <p><strong style="color: #2d3748;">Subject:</strong> ${result.subject}</p>
              <p><strong style="color: #2d3748;">Message:</strong></p>
              <p style="white-space: pre-wrap;">${result.message}</p>
            </div>
          `
        });
  
        // User Confirmation Email
        if (result.email) {
          await strapi.plugins.email.services.email.send({
            to: result.email,
            from: process.env.SMTP_FROM_EMAIL,
            subject: 'Thank you for contacting us!',
            html: `
              <h1 style="color: #4a5568;">Hi ${result.name}!</h1>
              <div style="background-color: #f7fafc; padding: 1.5rem; border-radius: 0.5rem;">
                <p>We've received your message and will respond within 24 hours.</p>
                <p style="margin-top: 1rem;"><strong>Your Message:</strong></p>
                <p style="white-space: pre-wrap;">${result.message}</p>
              </div>
            `
          });
        }
  
      } catch (err) {
        strapi.log.error('[Form Lifecycle] Email error:', err);
      }
    }
  };