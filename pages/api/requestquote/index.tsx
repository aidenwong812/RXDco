import { createHandler, Post, Body } from "next-api-decorators"
import { RXDCO_EMAIL } from "../../../lib/consts"
import { RequestQuoteDTO } from "../../../DTO/requestquote.dto"
import sendEmail from "../../../lib/sendEmail"

class SendQuoteRequest {
  @Post()
  async sendQuoteRequest(@Body() body: RequestQuoteDTO) {
    const { emailAddress, fullname, company, phoneNumber, other, products } = body

    const personalizations = [
      {
        to: [{ email: emailAddress, name: fullname }],
        subject: "Request A Quote Notification - RXDco",
      },
    ]

    const productList = products.map((product) => `<li>${product}</li>`).join("")

    const data = {
      personalizations,
      content: [
        {
          type: "text/html",
          value: `<html><body>
          <h2>Request a quote</h2>
          <p><strong>Full Name</strong><br>
          ${fullname} </p>
          <p><strong>Company</strong><br>
          ${company || "No response."} </p>
          <p><strong>Email Address</strong><br>
          <a href="mailto:${emailAddress}" target="_blank">${emailAddress}</a> </p>
          <p><strong>Phone Number</strong><br>
          ${phoneNumber} </p>
          <h6>Which products are you interested in? Choose 1 or more:</h6>
          <p><strong>Products</strong><br></p>
          <ul>
          ${productList}
          </ul>
          <p><strong>Other (optional)</strong><br>
          ${other} </p></body></html>`,
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

export default createHandler(SendQuoteRequest)
