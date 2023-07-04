import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { photos } from "@/utils/photos";

export const getStaticPaths = () => {
  return {
    paths: photos.map(({ id }) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const photo = photos.find(({ id }) => id === context.params.id);

  return {
    props: { photo },
  };
};

export default function Home({ photo }) {
  const router = useRouter();

  console.log("photo", photo);

  return (
    <>
      <Head>
        <title>Camilo Rivera / Photos</title>
        <meta
          name="description"
          content="Experienced developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.io/og.jpg" />
      </Head>
      <div className="mx-auto max-w-screen-lg px-2">
        <header className="mx-auto max-w-screen-md pb-4 pt-4">
          <h1 className="text-xl font-thin lowercase tracking-wide text-slate-400">
            Photo #{router.query.id}
          </h1>
        </header>
      </div>
      <main className="mx-auto max-w-screen-md">
        <Image
          src={photo.src}
          alt={photo.alt}
          priority
          quality={100}
          className="max-h-full max-w-full"
        />
      </main>
    </>
  );
}
