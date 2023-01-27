// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/?search=${req.query.term}&key=30dded4b0a263eb13fd9727aad167103`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "30dded4b0a263eb13fd9727aad167103",
        },
      }
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
  }
}
