import { createHandler, Post, Body } from "next-api-decorators"
import { ContactFormDTO } from "../../../DTO/contactform.dto"
import { RXDCO_EMAIL } from "../../../lib/consts"
import sendEmail from "../../../lib/sendEmail"

class SendContactRequest {
  @Post()
  async sendContactRequest(@Body() body: ContactFormDTO) {
    const { emailAddress, fullname, company, message } = body

    const personalizations = [
      {
        to: [{ email: emailAddress, name: fullname }],
        subject: "Contact Form Notification - RXDco",
      },
    ]

    const data = {
      personalizations,
      content: [
        {
          type: "text/html",
          value: `<html><body>
          <p><strong>Full Name</strong><br>
          ${fullname} </p>
          <p><strong>Company</strong><br>
          ${company || "No response."} </p>
          <p><strong>Email Address</strong><br>
          <a href="mailto:${emailAddress}" target="_blank">${emailAddress}</a> </p>
          <p><strong>Message</strong><br>
          ${message} </p>
          </body></html>`,
        },
      ],
      from: {
        email: RXDCO_EMAIL,
        name: "RXDco",
      },
      reply_to: {
        email: RXDCO_EMAIL,
        name: "RXDco",
      },
    }

    try {
      const response = await sendEmail(data)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(SendContactRequest)
