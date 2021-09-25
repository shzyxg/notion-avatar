import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

import AvatarEditor from './components/AvatarEditor';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Notion Avatar</title>
      <meta name="description" content="Notion Style Avatar Generator" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="my-5">
      <AvatarEditor />
    </main>

    <Footer />

    {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
  </>
);

export default Home;
