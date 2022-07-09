// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { internalServerError } from '../../api/errors'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if(req.query.test) {
    return res.status(200).json({ name: 'John Doe' })
  } else {
    return internalServerError(res);
  }

}
