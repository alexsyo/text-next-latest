// import nodemailer from 'nodemailer'
import { NextApiRequest, NextApiResponse } from "next";
import { badRequestError, internalServerError } from "../../api/errors";
import nodemailer from 'nodemailer'

export default async function routes(req: NextApiRequest, res: NextApiResponse) {
  switch(req.method) {
    case 'POST':
      return help(req, res)
    default:
      return badRequestError(res)
  }
}

const help = async (req: NextApiRequest, res: NextApiResponse) => {
  const { subject, text } = req.body

  if(!subject || !text) return badRequestError(res)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.SEND_EMAIL_USER,
      pass: process.env.SEND_EMAIL_PASSWORD
    },
    secure: true
  });

  return new Promise((resolve, reject) => transporter.sendMail({
    from: process.env.SEND_EMAIL_USER,
    to: process.env.SEND_EMAIL_RECIPIENT,
    subject: subject,
    text
  }, (err, info) => {
    if(err) {
      console.log(err)
      return reject(internalServerError(res))
    } else {
      return resolve(res.status(200).send({ emailSent: true }))
    }
  }))
}
