import Link from 'next/link'

import Animation from './Animation'
import styles from './Home.module.scss'

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Hello, I&apos;m{" "}
            <span>chimsil</span>
          </h1>
          <p>
            이 사이트는 프론트엔드 개발자 박재희의 개인 포트폴리오입니다.
          </p>
          <Link href="/project">
            projects view
          </Link>
        </div>
        <div className={styles.animation}>
          <Animation />
        </div>
      </div>
    </section>
  )
}

export default Hero