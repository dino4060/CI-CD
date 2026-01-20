"use client";

import { useRouter } from "next/navigation";

export default function Nhan() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Nguyen Trung Nhan
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Full stack skills - React - Java - SQl - CI/CD
          </p>
          <div className="w-full max-w-2xl">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
              Projects
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">
                  TTECH
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Technology product e-shop with strong at deals
                </p>
              </div>
              <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                <h3 className="text-xl font-medium text-black dark:text-zinc-50 mb-2">
                  BBED
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Travel booking platform with strong friendly process
                </p>
              </div>
            </div>
          </div>
          <button
            className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-39.5"
            onClick={handleNavigate}
          >
            Home
          </button>
        </div>
      </main>
    </div>
  );
}
