/* eslint-disable no-console */
import axios from 'axios';

import { TOKEN, DATABASE_ID } from '@/config';

import styles from './Project.module.scss';


export const getData = async () => {
  const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  };
  
  try {
    const response = await axios.request(options);
    const projectsNames = response.data.results.map((e: any) => (
      e.properties.Name.title[0].plain_text
      ));

      return {
        props: {
          projectsNames,
        },
      };
    } catch (error) {
      console.log(error);

    return {
      props: {
        projectsNames: [],
      },
    };
  }
}

const Project = async () => {
  const data = await getData();
  console.log(data)
  return (
    <div className={styles.container}>
      project
    </div>
  );
};

export default Project;