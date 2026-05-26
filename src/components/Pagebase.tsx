import { Mlinks } from "../const/info";

export default function PageBase() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      <main className="flex w-full max-w-4xl flex-col md:pt-25 sm:pt-40 sm:pb-1 pt-20 px-8 flex-1">
        <section className="space-y-4 sm:mb-10 mb-0.5">
          <h1 className="text-4xl font-mono tracking-tighter font-bold">
            Home
          </h1>
          <p className="max-w-150 mb-4 font-mono  leading-snug text-zinc-500 dark:text-zinc-400 text-lg ">
            Just a Homepage, but done my way.
          </p>
          <div className=" border-zinc-200  dark:border-zinc-800 flex flex-col space-y-2 ">
            {Mlinks.map((link) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={link.href}
                href={link.href}
                className="text-zinc-400 cursor-pointer text-2xl hover:text-black dark:hover:text-white transition-colors w-fit font-mono"
              >
                {link.title}
              </a>
            ))}
          </div>
        </section>
      </main>
      <footer className="w-full max-w-4xl px-8 pb-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-md text-zinc-400">
        <span>© {new Date().getFullYear()} raulmoracode</span>
        <a
          href="mailto:contact@raulmoracode.com"
          className="hover:text-black dark:hover:text-white transition-colors"
        >
          contact@raulmoracode.com
        </a>
      </footer>
    </div>
  );
}
