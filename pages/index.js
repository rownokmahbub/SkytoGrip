import Head from "next/head";
import Image from "next/image";
import Offers from "../components/Home/Offers";
import Hero from "../components/Home/Hero";
import DownloadApp from "../components/Home/DownloadApp";
import Flight from "../components/Home/Flight";
import Service from "../components/Home/Service";
import Benifits from "../components/Home/Benifits";
import Terms from "../components/Home/Terms";




export default function Home() {
  return (
    <div>
      <Head>
        <title>Srtip to go</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Service/>
      <Offers/>
      <DownloadApp/>
      <Flight/>
      <Terms/>
      <Benifits/>
    </div>
  );
}
