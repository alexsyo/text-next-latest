import { NextApiResponse } from "next";

export const handleError = (res: NextApiResponse, status: number, error: string) =>
  res.status(status).json({ error })

export const badRequestError = (res: NextApiResponse) =>
  handleError(res, 400, 'Bad Request')

export const internalServerError = (res: NextApiResponse) =>
  handleError(res, 500, 'Internal Server Error')
