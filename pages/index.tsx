import Link from 'next/link';
import { Inter } from 'next/font/google';
import { WordAnimation } from '../components/wordanimation/wordanimation';
import styles from '../components/index.module.css';
import Layout from '@/components/layout';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const word = 'fullstack developer';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hi, its Rov</title>
      </Head>
      {/* hero section */}
      <div className='bg-pale'>
        <section className='content'>
          <div className={styles.header}>
            <p className={styles.subtitle}>
              about me & other things I do →
              <Link href='/about'>
                <span className='link mx-3'>see info</span>
              </Link>
            </p>
            <h1 className='headingL weightMedium'>
              Rovan Lama,
              <br />
              Software Engineer &{' '}
              {word.split('').map((char, i) => {
                return <WordAnimation char={char} key={i} id={i} />;
              })}
            </h1>
          </div>
        </section>
      </div>

      {/* tech stack */}
      <div className='tech-stack-section'>
        <div className='content'>
          <div className={styles.header}>
            <p className={styles.subtitle}>
              I have experience with the following tech stacks
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
