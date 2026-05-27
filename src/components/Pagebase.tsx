import { Mlinks } from "../const/info";

export default function PageBase() {
  return (
    <div className="flex min-h-screen flex-col items-center font-sans">
      <main className="flex w-full max-w-4xl flex-col md:pt-25 sm:pt-40 sm:pb-1 pt-20 px-8 flex-1">
        <section className="space-y-4 sm:mb-10 mb-6">
          <h1 className="text-4xl  tracking-tighter font-mono font-bold">
            Home
          </h1>
          <p className="max-w-150 mb-4 font-mono  leading-snug text-zinc-500  text-lg ">
            Just a Homepage, but done my way.
          </p>
          <div className="border-zinc-200  dark:border-zinc-800 flex flex-col space-y-2 ">
            {Mlinks.map((link) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                key={link.href}
                href={link.href}
                className="text-zinc-400 font-medium font-mono cursor-pointer text-2xl hover:text-black transition-colors w-fit "
              >
                {link.title}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
