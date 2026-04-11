import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Initialize Resend with API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email to Stealth Translations
    const emailResult = await resend.emails.send({
      from: 'contact@stealthtranslations.com',
      to: 'sales@stealthtranslations.com',
      subject: `New Contact Form Submission - ${service || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background-color: #1e293b; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Stealth Translations</h1>
            <p style="color: #94a3b8; margin: 10px 0 0 0;">New Contact Form Submission</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #1e293b; margin-bottom: 20px;">Contact Information</h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Name:</strong>
              <span style="color: #64748b; margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Email:</strong>
              <span style="color: #64748b; margin-left: 10px;">${email}</span>
            </div>
            
            ${phone ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Phone:</strong>
              <span style="color: #64748b; margin-left: 10px;">${phone}</span>
            </div>
            ` : ''}
            
            ${company ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Company:</strong>
              <span style="color: #64748b; margin-left: 10px;">${company}</span>
            </div>
            ` : ''}
            
            ${service ? `
            <div style="margin-bottom: 15px;">
              <strong style="color: #475569;">Service Interest:</strong>
              <span style="color: #64748b; margin-left: 10px;">${service}</span>
            </div>
            ` : ''}
            
            <div style="margin-bottom: 20px;">
              <strong style="color: #475569;">Message:</strong>
              <div style="color: #64748b; margin-top: 10px; padding: 15px; background-color: #f8fafc; border-radius: 5px; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                This email was sent from the Stealth Translations contact form.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    // Send confirmation email to the user
    if (email) {
      await resend.emails.send({
        from: 'contact@stealthtranslations.com',
        to: email,
        subject: 'Thank you for contacting Stealth Translations',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <div style="background-color: #1e293b; padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">Stealth Translations</h1>
              <p style="color: #94a3b8; margin: 10px 0 0 0;">Thank You for Your Inquiry</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1e293b; margin-bottom: 20px;">We've Received Your Message</h2>
              
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Dear ${name},
              </p>
              
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                Thank you for contacting Stealth Translations. We have received your message and our team will review your inquiry shortly.
              </p>
              
              <p style="color: #64748b; line-height: 1.6; margin-bottom: 20px;">
                We typically respond within 24 hours during business days. If your matter is urgent, please don't hesitate to call us directly at +44 28 28 267 103.
              </p>
              
              <div style="background-color: #f8fafc; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <h3 style="color: #1e293b; margin-bottom: 10px;">Contact Information:</h3>
                <ul style="color: #64748b; margin: 0; padding-left: 20px;">
                  <li>Email: sales@stealthtranslations.com</li>
                  <li>Phone: +44 28 28 267 103</li>
                  <li>Hours: Monday-Friday, 9AM-6PM GMT</li>
                </ul>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #94a3b8; font-size: 12px; margin: 0;">
                  Best regards,<br>
                  The Stealth Translations Team
                </p>
              </div>
            </div>
          </div>
        `,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
