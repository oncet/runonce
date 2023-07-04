import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 print:!text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
