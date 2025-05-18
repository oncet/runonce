import Button from "@/components/Button";
import Card from "@/components/Card";
import InputField from "@/components/InputField";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Camilo Rivera / Web developer</title>
        <meta
          name="description"
          content="Experienced web developer proficient in TypeScript, React, Node.js, and SQL."
          key="desc"
        />
        <meta property="og:image" content="https://runonce.dev/og.jpg" />
      </Head>
      <main>
        <div className="mx-auto max-w-screen-md px-4 py-2">
          <form className="flex flex-col gap-4">
            <InputField>
              <InputField.Label htmlFor="title">Title *</InputField.Label>
              <InputField.Input
                id="title"
                placeholder="e.g. Software Engineer"
              />
            </InputField>
            <div className="flex flex-col gap-4 sm:flex-row">
              <InputField className="grow">
                <InputField.Label htmlFor="start-date">
                  Start date *
                </InputField.Label>
                <InputField.Input id="start-date" type="date" />
              </InputField>
              <InputField className="grow">
                <InputField.Label htmlFor="end-date">End date</InputField.Label>
                <InputField.Input id="end-date" type="date" />
              </InputField>
            </div>
            <div className="flex flex-col gap-4">
              <InputField>
                <InputField.Label htmlFor="new-keyword">
                  Keywords
                </InputField.Label>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <InputField.Input
                    id="new-keyword"
                    className="grow"
                    placeholder="e.g. React, Node.js, SQL"
                  />
                  <button
                    type="button"
                    className="flex shrink justify-center gap-2 rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-plus-icon lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>{" "}
                    Add
                    <span className="block sm:hidden"> keyword</span>
                  </button>
                </div>
              </InputField>
              <ul className="flex flex-wrap gap-4">
                <li className="inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200">
                  <span>Keyword 1</span>
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-x"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </li>
                <li className="inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200">
                  <span>Keyword 1</span>
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-x"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </li>
                <li className="inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200">
                  <span>Keyword 1</span>
                  <button type="button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-x"
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <InputField>
                <InputField.Label>Highlights</InputField.Label>
                <div className="flex flex-col items-start gap-4 sm:flex-row">
                  <textarea
                    id="new-highlights"
                    rows={1}
                    className="grow resize-none rounded-xl border-2 px-4 py-2 font-normal [field-sizing:content] terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200"
                    placeholder="i.e. Whatever you find relevant about this experience"
                  />
                  <button
                    type="button"
                    className="flex shrink justify-center gap-2 rounded-xl border-2 px-4 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-slate-800 dark:text-slate-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-plus-icon lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>{" "}
                    Add
                    <span className="block sm:hidden"> highlight</span>
                  </button>
                </div>
              </InputField>
              <ul className="flex flex-col gap-2">
                <li className="mb-2 flex items-start gap-2">
                  <Card className="px-5 py-3">
                    <span>
                      Contributed to the Playwright test suites, writing tests
                      for new features and adding test cases to cover
                      regressions. Contributed to the Playwright test suites,
                      writing tests for new features and adding test cases to
                      cover regressions. Contributed to the Playwright test
                      suites, writing tests for new features and adding test
                      cases to cover regressions. Contributed to the Playwright
                      test suites, writing tests for new features and adding
                      test cases to cover regressions.
                    </span>
                    <button
                      type="button"
                      className="rounded-xl border-2 px-2 py-2 font-semibold terminal:rounded-none terminal:border-orange-500 dark:border-transparent dark:text-slate-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-x"
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                    </button>
                  </Card>
                </li>
              </ul>
            </div>
            <Button>Save</Button>
          </form>
        </div>
      </main>
    </>
  );
}
