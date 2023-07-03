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
      <header className="mx-auto mb-4 max-w-screen-md px-6 pt-4 sm:pt-8">
        <h1 className="text-4xl font-extrabold lowercase tracking-tight">
          Photo #{router.query.id}
        </h1>
      </header>
      <main>
        <Image src={photo.src} alt={photo.alt} priority />
      </main>
    </>
  );
}
