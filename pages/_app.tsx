import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
