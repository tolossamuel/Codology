import { IncomingForm } from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false, // Disable body parsing so Formidable can handle it
  },
};

const uploadDir = path.join(process.cwd(), '/uploads');

// Ensure the upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const form = new IncomingForm({
    uploadDir,
    keepExtensions: true,
  });

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.status(500).json({ error: 'Error uploading file' });
      return;
    }

    // Dummy summary response
    const summary = 'This is a summary of the uploaded document.';

    res.status(200).json({ summary });
  });
};

export default handler;
