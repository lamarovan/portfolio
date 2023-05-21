import { ReactComponentElement, useState } from 'react';
import styles from '../components/layout.module.css';
import Head from 'next/head';

function Footer() {
  const [copyText, setcopyText] = useState('copy');
  const copytoClipboard = async (copyMe: string) => {
    try {
      await navigator.clipboard.writeText(copyMe);
      setcopyText('copied!');
      setTimeout(() => {
        setcopyText('copy');
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='content'>
      <div className={styles.footer}>
        <div className={styles.group}>
          <p>
            I designed and built this website on NextJS. Check on{' '}
            <a
              className='link'
              href='https://github.com/lamarovan/portfolio'
              target='_blank'
            >
              GitHub
            </a>
            .
            <br />
            <br />
            <br />
            Let’s connect on{' '}
            <a
              className='link'
              href='https://www.linkedin.com/in/rovan-lama-ba40a5172/'
              target='_blank'
            >
              LinkedIn
            </a>{' '}
            or talk over email rovanlama@live.com →{' '}
            <a
              className={`${styles.copyCursor} link`}
              onClick={() => copytoClipboard('rovanlama@live.com')}
            >
              {copyText}
            </a>
            <br />
            <br />
            Thank you for visiting & have a nice day!
          </p>
        </div>
      </div>
    </div>
  );
}

// Main container that being used everywhere with imported CSS class
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Head>
        <meta property='og:url' content='https://yaosamo.com' />
        <meta property='og:title' content='Rovan Lama' />
        <meta property='og:description' content='Fullstack software engineer' />
        {/* <meta property='og:image' content='https://yaosamo.com/intro.jpg' /> */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Rovan LamaRovan Lama' />
        <meta name='description' content='Fullstack software engineer' />
        <link rel='icon' href='favicon.svg' />
        <link rel='mask-icon' href='favicon.svg' color='#000000;' />
        <meta name='theme-color' content='#FFFFFF' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
          rel='stylesheet'
        ></link>
      </Head>
      {children}
      <Footer />
    </>
  );
}
