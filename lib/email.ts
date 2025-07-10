import nodemailer from "nodemailer";

// Configure Mailtrap SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST as string,
  port: parseInt(process.env.MAILTRAP_PORT as string, 10),
  auth: {
    user: process.env.MAILTRAP_USER as string,
    pass: process.env.MAILTRAP_PASS as string,
  },
} as nodemailer.TransportOptions);

// Email Header
const EmailHeader = (subject: string) => `
  <table style="width:100%;">
    <tbody>
      <tr>
        <td valign="top">
          <table class="es-header" align="center" style="width:100%;">
            <tbody>
              <tr>
                <td align="center">
                  <table class="es-header-body" style="width:600px;">
                    <tbody>
                      <tr>
                        <td align="left" style="padding:10px;">
                          <table style="width:100%;">
                            <tbody>
                              <tr>
                                <td valign="top" align="center" style="width:560px;">
                                  <a href="${process.env.NEXTAUTH_URL || "https://yourplatform.com"}" target="_blank" style="display: flex; align-items: center; text-decoration: none;">
                                    <img   src="${process.env.NEXTAUTH_URL || ''}/assets/imgs/template/favicon.svg"  width="25" height="25" alt="Logo" style="border:0; margin-right: 12px;">
                                    <div style="display: flex; flex-direction: column;">
                                      <span style="font-family: serif; font-size: 36px; font-weight: 800; color: #1a202c; line-height: 1.2;">Spotlight</span>
                                    </div>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
`;

// Email Content Wrapper
const EmailContentWrapper = (content: string) => `
  <table style="width:100%;">
    <tbody>
      <tr>
        <td align="center">
          <table style="width:600px; background-color:#ffffff; padding:20px; border-radius:8px;">
            <tbody>
              <tr>
                <td style="font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#0e0e0e;">
                  ${content}
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
`;

// Email Footer
const EmailFooter = () => `
  <table style="width:100%;">
    <tbody>
      <tr>
        <td align="center">
          <table style="width:600px; padding:10px;">
            <tbody>
              <tr>
                <td style="font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#666666;">
                  <p>© ${new Date().getFullYear()} ${process.env.NEXT_PUBLIC_SITE_NAME || "Spotlight"}. All rights reserved.</p>
                  <p>Contact us at <a href="mailto:support@${process.env.NEXT_PUBLIC_SITE_NAME?.toLowerCase() || "nvw"}.com">support@${process.env.NEXT_PUBLIC_SITE_NAME?.toLowerCase() || "nvw"}.com</a></p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
`;

// Email Template Wrapper
const EmailTemplate = ({ content, subject }: { content: string; subject: string }) => `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>${subject}</title>
      <style type="text/css">
        body {
          background-color:#F5F9FF;
          font-family: Arial, Helvetica, sans-serif;
          margin: 0;
          padding: 0;
        }
      </style>
    </head>
    <body style="margin:0;padding:0;width:100%;">
      <div>
        ${EmailHeader(subject)}
        ${EmailContentWrapper(content)}
        ${EmailFooter()}
      </div>
    </body>
  </html>
`;

// Email template for contest organizer
const getContestOrganizerEmailTemplate = (contact: any, contestName: string) => {
  const content = `
    <p style="font-size:20px;color:#0e0e0e;">Dear Contest Organizer,</p>
    <p style="font-size:14px;color:#0e0e0e;padding-top:20px;">A new contact form submission has been received for ${contestName}.</p>
    <p style="font-size:14px;color:#0e0e0e;padding-top:20px;">Details:</p>
    <ul style="font-size:14px;color:#0e0e0e;">
      <li>Name: ${contact.name}</li>
      <li>Email: ${contact.email}</li>
      <li>Phone: ${contact.phone || "Not provided"}</li>
      <li>Subject: ${contact.subject || "Not provided"}</li>
      <li>Message: ${contact.message}</li>
    </ul>
    <p style="font-size:14px;color:#0e0e0e;padding-top:20px;">Contest Details:</p>
    <ul style="font-size:14px;color:#0e0e0e;">
      <li>Title: ${contestName}</li>
      <li>Leader: ${contact.contest?.leaderName || "Not specified"}</li>
      <li>Assistant: ${contact.contest?.asstName || "Not specified"}</li>
      <li>Participation Fee: $${contact.contest?.participationFee || 0}</li>
      <li>Next Round: ${contact.contest?.rounds[0]?.name || "Not scheduled"} (${new Date(contact.contest?.rounds[0]?.start_date).toLocaleDateString()} - ${new Date(contact.contest?.rounds[0]?.end_date).toLocaleDateString()})</li>
    </ul>
  `;
  return EmailTemplate({ content, subject: `New Contact Submission for ${contestName}` });
};

// Send emails for contact form submission (only contest organizer)
export async function sendContactEmails(contact: any, contest: any) {
  try {
    // Validate inputs
    if (!contact?.email) throw new Error("Contact email is missing");
    if (!contest?.organizerEmail && !process.env.DEFAULT_ORGANIZER_EMAIL) {
      console.warn(`No organizer email found for contest ID: ${contact.contest_id}`);
      return [{ status: "skipped", message: "No organizer email available" }];
    }

    const emailData = {
      _id: contact._id,
      name: contact.name || "Contact",
      email: contact.email,
      phone: contact.phone,
      subject: contact.subject,
      message: contact.message,
      gender: contact.gender,
      category: contact.category,
      contest: contest, // Include contest details
    };

    const organizerEmail = contest.organizerEmail || process.env.DEFAULT_ORGANIZER_EMAIL || "support@nvw.com";

    const emails = [
      {
        to: organizerEmail,
        subject: `New Contact Submission for ${contest.title || "Contest"}`,
        html: getContestOrganizerEmailTemplate(emailData, contest.title || "Contest"),
      },
    ].filter(email => email.to); // Ensure valid email

    const emailResults = await Promise.all(
      emails.map((email) =>
        transporter.sendMail({
          from: process.env.EMAIL_FROM,
          ...email,
        }).then((info) => ({ status: "success", to: email.to, messageId: info.messageId }))
          .catch((error) => ({ status: "error", to: email.to, error: error.message }))
      )
    );

    console.log("Email sending results:", emailResults);
    return emailResults;
  } catch (error: any) {
    console.error(`Error in sendContactEmails for contact ID ${contact._id}:`, error);
    return [{ status: "error", error: error.message || String(error) }];
  }
}