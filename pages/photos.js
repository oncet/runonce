import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Image1 from "../public/photos/DSC01884.jpg";
import Image2 from "../public/photos/DSC01943.jpg";
import Image3 from "../public/photos/DSC01954.jpg";
import Image4 from "../public/photos/DSC01972.jpg";
import Image5 from "../public/photos/DSC02167.jpg";
import Image6 from "../public/photos/DSC02185.jpg";
import Image7 from "../public/photos/DSC02276.jpg";
import Image8 from "../public/photos/DSC02719.jpg";
import Image9 from "../public/photos/DSC02779.jpg";
import Image10 from "../public/photos/DSC02865.jpg";
import Image11 from "../public/photos/DSC02929.jpg";

const photos = [
  { image: Image1, alt: "Image 1", priority: true },
  { image: Image2, alt: "Image 2" },
  { image: Image3, alt: "Image 3" },
  { image: Image4, alt: "Image 4" },
  { image: Image5, alt: "Image 5" },
  { image: Image6, alt: "Image 6" },
  { image: Image7, alt: "Image 7" },
  { image: Image8, alt: "Image 8" },
  { image: Image9, alt: "Image 9" },
  { image: Image10, alt: "Image 10" },
  { image: Image11, alt: "Image 11" },
];

export default function Home() {
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
        <h1 className="text-4xl font-extrabold tracking-tight">photos</h1>
      </header>
      <main>
        <div className="mx-auto max-w-screen-md px-6">
          <p className="mb-4 text-lg text-slate-300 [text-wrap:balance]">
            I also do amateur photography.
          </p>
        </div>
        <div className="mx-auto mb-8 mt-8 grid max-w-screen-xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {photos.map(({ image, alt, priority }) => (
            <Image
              key={alt}
              src={image}
              alt={alt}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={priority}
            />
          ))}
        </div>
      </main>
    </>
  );
}
