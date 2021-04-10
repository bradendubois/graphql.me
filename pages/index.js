import Head from 'next/head'
import useSWR from "swr"
import styles from '../styles/Home.module.css'

import React from 'react';
import GraphiQL from 'graphiql';
import "graphiql/graphiql.min.css"

import "../styles/Home.module.css"

/*
export default function Home() {

  useSWR("/api/hello")

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
*/

const Home = () => (

    <div>
        <Head></Head>

        <main>
            <GraphiQL
                fetcher={async graphQLParams => {
                    const data = await fetch(
                        '/api/hello',
                        {
                            method: 'POST',
                            headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(graphQLParams),
                            credentials: 'same-origin',
                        },
                    );
                    return data.json().catch(() => data.text());
                }}
            />
        </main>

    </div>
);

export default Home