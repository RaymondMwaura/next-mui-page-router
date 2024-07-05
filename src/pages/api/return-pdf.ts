import fs from "fs";
import { v4 as uuid } from "uuid";
import { NextApiRequest, NextApiResponse } from "next";

const filePath =
  "/Users/rwmwaura/Documents/source_code/js_ts/next-mui-page-router/public/simpleTestPDF.pdf";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = fs.readFileSync(filePath);
    const fileName = uuid();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `inline; filename="${fileName}.pdf"`);
    res.status(200).end(data.toString("base64"));
  } catch (err: any) {
    res.status(500).send(err?.message || "Error returning PDF");
  }
}
