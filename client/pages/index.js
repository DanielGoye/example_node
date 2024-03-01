import Head from "next/head";
import HomePage from "@/src/pages/HomePage";

const Home = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Elevating Ideas through Code: Your Vision, My Expertise`}
        />
        <meta property="og:title" content="Super Dev Dan" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_API}`} />
        <meta
          property="og:description"
          content={`Elevating Ideas through Code: Your Vision, My Expertise.`}
        />
        <meta
          property="og:image"
          content={`https://res.cloudinary.com/dhb2zvszq/image/upload/q_auto:eco/v1693393880/Porfolio/SuperDevDan_Logo_FBOG_mr4ki0.png`}
        />
        <title>Super Dev Dan</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
