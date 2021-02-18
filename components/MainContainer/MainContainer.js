import React from 'react';
import Head from 'next/head';
import Nav from '../Nav/Nav';
import styles from './MainConrainer.module.css';

const MainContainer = ({children, keywords, title = 'Next'}) => {
    return (
        <>
            <Head>
                <meta keywords={`ssr nextjs js react ${keywords}`} />
                <title>{title}</title>
            </Head>

            <Nav />

            <main className={styles.container}>
                {children}
            </main>
        </>
    );
};

export default MainContainer;