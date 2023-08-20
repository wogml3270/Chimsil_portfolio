'use client';

/* eslint-disable no-console */

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import uuid from 'react-uuid'; // 임시방편 uuid key

import { getNotionDataAPI } from '@/services';

import styles from './Project.module.scss';
import Loading from '../Loading';

const Project = () => {
  const { data, isLoading, isError } = useQuery(['queryKey'], getNotionDataAPI);

  return (
    <div className={styles.container}>
      {isLoading && <Loading />}
      {isError && <div className={styles.error}>Error occurred while fetching data.</div>}
      {data &&
        data?.data?.projects?.map((item: any) => (
          <div key={uuid()} className={styles.card}>
            <div>{item?.Name?.title[0]?.plain_text}</div>
            <div>{item?.Description.rich_text[0]?.plain_text}</div>
          </div>
        ))}
    </div>
  );
};

export default Project;
