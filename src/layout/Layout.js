import Head from "next/head";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Globadyme | The Future of Payments</title>
        <meta name="description" content="Globadyme - A payment service provider with a unique structure, reducing transaction costs by up to 50% for online companies. Our mission is to offer the best prices and user experience with transparency and simple payment insights. Empowering the future of payments for all." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <Navbar />
        <div className="">
          <div className="">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};
