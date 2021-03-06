import Head from "next/head";
import Image from "next/image";
import Main_Search from "../components/main/Search";

export default function Home() {
  return (
    <div className='bg-blue-500 min-h-screen'>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Main_Search />
    </div>
  );
}
