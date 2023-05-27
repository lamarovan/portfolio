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

      {/* tech stack section */}
      <div className='tech-section'>
        <div className='content'>
          <div className='pt-20'>
            <h2 className='headingM weightMedium'>
              Some of the tech stacks I've worked with
            </h2>

            {/* gallery section */}
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 xl:gap-8 mt-10'>
              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
                  loading='lazy'
                  alt='JavaScript logo'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-350 group-hover:scale-105'
                />
              </div>

              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60'>
                <img
                  src='https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo.png'
                  loading='lazy'
                  alt='TypeScript logo'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-350 group-hover:scale-105'
                />
              </div>

              <div className='group relative flex h-48 items-end rounded-lg md:col-span-2 md:h-60'>
                <img
                  src='https://testrigor.com/wp-content/uploads/2023/01/express-logo.png'
                  loading='lazy'
                  alt='ExpressJS logo'
                  className='absolute inset-0 w-full object-cover object-center transition duration-350 group-hover:scale-105 my-auto'
                />
              </div>

              <div className='group relative flex h-48 items-end rounded-lg md:col-span-2 md:h-60'>
                <img
                  // src='https://bigbear.ai/wp-content/uploads/2021/08/PostgreSQL-logo.webp'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png'
                  loading='lazy'
                  alt='NodeJS logo'
                  className='absolute inset-0 w-full object-cover object-center transition duration-350 group-hover:scale-105 my-auto'
                />
              </div>

              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60'>
                <img
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
                  loading='lazy'
                  alt='Angular logo'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-350 group-hover:scale-105'
                />
              </div>

              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60'>
                <img
                  src='https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256'
                  loading='lazy'
                  alt='React logo'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-350 group-hover:scale-105'
                />
              </div>

              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60'>
                <img
                  src='https://masteringjs.io/assets/images/vue/vue.png'
                  loading='lazy'
                  alt='Vue logo'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-350 group-hover:scale-105'
                />
              </div>

              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-60'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTllPbgGHXIbbRvMDRxIt4ihyqHLDu1JUhuAKYlPH-&s'
                  loading='lazy'
                  alt='NestJS logo'
                  className='absolute inset-0 h-full w-full object-cover object-center transition duration-350 group-hover:scale-105'
                />
              </div>

              <div className='group relative flex h-48 items-end overflow-hidden rounded-lg md:col-span-2 shadow-lg md:h-60'>
                <img
                  src='https://bigbear.ai/wp-content/uploads/2021/08/PostgreSQL-logo.webp'
                  loading='lazy'
                  alt='PostgreSQL logo'
                  className='absolute inset-0 w-full object-cover object-center transition duration-350 group-hover:scale-105 my-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
