import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

import { TOKEN, DATABASE_ID } from '@/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const options = {
    method: 'POST',
    url: `/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  };

  try {
    const response = await axios.request(options);
    const projects = response.data.results.map?.((e: any) => e.properties);

    res.status(200).json({
      projects,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      projects: [],
    });
  }
}
