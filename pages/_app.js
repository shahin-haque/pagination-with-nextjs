import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pagination with Nextjs </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Simple pagination with Nextjs " />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
