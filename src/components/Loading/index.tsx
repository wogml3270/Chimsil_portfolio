'use client';

import Image from 'next/image';

import styles from './Loading.module.scss';

interface LoadingItem {
  src: string;
  alt: string;
  text: string;
}

const Loading = () => {
  const LOADING_IMAGE: LoadingItem = {
    src: '/assets/Infinity-loading.gif',
    alt: 'loading_image',
    text: '로딩 중...',
  };

  return (
    <div className={styles.loading}>
      <Image src={LOADING_IMAGE?.src} alt={LOADING_IMAGE?.alt} width={150} height={150} />
      <p className={styles.loadingText}>{LOADING_IMAGE?.text}</p>
    </div>
  );
};

export default Loading;
