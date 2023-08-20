/* eslint-disable no-console */
import axios from 'axios';
import { NextResponse } from 'next/server';

import { TOKEN, DATABASE_ID } from '@/config';

const getNotionData = async () => {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    validateStatus: (status: number) => {
      return status >= 200 && status < 300; // HTTP OK 상태 (200-299)만 허용
    },
  };

  try {
    const res = await axios.request(options);
    const projects = res.data.results.reverse().map?.((e: any) => e.properties);

    return {
      projects,
    };
  } catch (error) {
    console.log(error);

    return {
      projects: [],
    };
  }
};

export const GET = async () => {
  const data = await getNotionData();
  return NextResponse.json(data);
};
