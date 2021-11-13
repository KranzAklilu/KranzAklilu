import Head from "next/head";
import NavBar from "../components/layout/NavBar";
import FullScreenIntro from "../views/FullScreenIntro";
import Resume from "../views/home/Resume";
import Work from "../views/home/Work";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Kranz Aklilu | Developer Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <FullScreenIntro />
        <Work />
        <Resume />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
