import { createHandler, Post, Body } from "next-api-decorators"
import { RXDCO_EMAIL } from "../../../lib/consts"
import { RequestSampleDTO } from "../../../DTO/requestsample.dto"
import sendEmail from "../../../lib/sendEmail"

class SendSampleRequest {
  @Post()
  async sendSampleRequest(@Body() body: RequestSampleDTO) {
    const {
      emailAddress,
      fullname,
      company,
      companyType,
      productType,
      phoneNumber,
      address,
      city,
      postalCode,
      province,
      other,
      sharing,
      country,
      products,
      orderQuantity,
    } = body

    const personalizations = [
      {
        to: [{ email: emailAddress, name: fullname }],
        subject: "Request A Sample Notification - RXDco",
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
          <p><strong>Company Type</strong><br>
          ${companyType} </p>
          <p><strong>Product Type</strong><br>
          ${productType} </p>
          <p><strong>Estimated Order Quantity</strong><br>
          ${orderQuantity}</p>
          <p><strong>Email Address</strong><br>
          <a href="mailto:${emailAddress}" target="_blank">${emailAddress}</a> </p>
          <p><strong>Phone Number</strong><br>
          ${phoneNumber} </p>
          <p><strong>Address:</strong>${address} </p>
          <p><strong>City:</strong>${city} </p>
          <p><strong>State / Province:</strong>${province} </p>
          <p><strong>ZIP / Postal Code:</strong>${postalCode} </p>
          <p><strong>Country:</strong>${country} </p>
          <h6>Anything else you would like to share with us?</h6>
          <p>${sharing}</p>
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

export default createHandler(SendSampleRequest)
