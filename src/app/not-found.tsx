import Link from 'next/link';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>404 Not Found.</h2>
      <p>없는 주소입니다. 뒤로가기를 눌러주세요.</p>
      <div>
        <Link href='/'>홈으로</Link>
      </div>
    </div>
  );
};

export default NotFound;
