import Head from 'next/head';
import Link from 'next/link';

import styles from '../components/about.module.css';
import Layout from '@/components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Hi, its Rov</title>
      </Head>
      <div className='content'>
        <div className={styles.container}>
          <Link href='/'>
            <div className={styles.arrowback}>
              <img
                src='../Arrow-right.svg'
                className={styles.arrow}
                alt='back button'
              />
            </div>
          </Link>

          {/* place an image here */}
          {/* <img className={styles.me} src='../images/about/me2@2x.webp' /> */}

          <div>
            <div className={styles.timestamp}>
              <p>May 19, 2023 at 9:16 AM</p>
              <div className={styles.caret} />
            </div>
            <p className={styles.headingL}>
              Hello! I’m Rovan Lama a software engineer and fullstack developer
              based in Nepal. I graduated from Islington college, and for the
              past two years I have been working as a software engineer.
              <br />
              <br />
              After graduating, I started my career as a frontend developer but
              my love for technology and facing new challenges got me into
              learning fullstack development. Now, I am working as a fullstack
              developer.
              <br />
              <br />
              I’ve always been inspired by the tech industry, computers and
              software. In my spare time I explore adjacent areas such as art,
              photography, philosophy and a bit of music.
              <br />
              <br />
              To know more about my experience, skill, education and other
              information
              <br />
              <br />
              Download my
              <a
                href='/resume.pdf'
                download='rovan_lama_resume'
                className='link mx-2'
              >
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
