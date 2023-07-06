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
      <main className="mx-auto flex max-w-screen-lg grow flex-col">
        <div>
          <Image
            src={photo.src}
            alt={photo.alt}
            priority
            quality={100}
            className="mb-4 mt-8 max-h-full max-w-full sm:px-4"
          />
          <h1 className="px-4 text-right text-xl font-thin tracking-wide dark:text-slate-400">
            {router.query.id}
          </h1>
        </div>
      </main>
    </>
  );
}
