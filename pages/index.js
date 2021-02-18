import Nav from "../components/Nav/Nav";
import Head from "next/head";


const Index = () => {
  return (
    <>
      <Head>
        <meta keywords="ssr nextjs js react" />
        <title>Main</title>
      </Head>
      <Nav />
      <h1>Main page</h1>
    </>
  );
};

export default Index;