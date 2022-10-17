import type { NextPage } from 'next'
import Head from "next/head";
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>CutShort Assignment</title>
        <meta name="description" content="UI assignment for CutShort" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default Home
