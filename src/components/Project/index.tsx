'use client'

import { useEffect, useState } from 'react';

import { getNotionDataAPI } from '@/services';

import styles from './Project.module.scss';
// import { getNotionData } from '@/app/api/project/route';

const ProjectComponent = async () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getNotionDataAPI();

      
      setData(result.data);
    };
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className={styles.container}>
      {data?.projects?.reverse().map((item: any) => (
        <div key={item.id} className={styles.card}>
          <div>{item.Name.title[0].plain_text}</div>
        </div>
      ))}
    </div>
  );
};

export default ProjectComponent;
