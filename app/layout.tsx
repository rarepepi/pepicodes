import "@/styles/globals.css";

import { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import BackgroundMagic from "@/components/BackgroundMagic";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pepi Codes",
  description: "Pepi Martinez - Software Engineer - Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          async
          src="https://umami.pepi.codes/script.js"
          data-website-id="1ac4cbc1-7b53-4517-b1fb-1ceaaeafe5ab"
        ></script>
      </head>
      <body className="min-h-screen">
        <BackgroundMagic />

        <div className="overview-left">
          <a
            href="https://github.com/rarepepi"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400  cursor-pointer	w-8 hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <i className="fa fa-github text-xl mr-2 mb-6 text-black dark:text-white" />
          </a>
          <a
            href="https://twitter.com/rarepepi"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400  cursor-pointer w-8 hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <i
              className="fa fa-twitter text-xl mr-2 mb-6 text-black dark:text-white"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/pepimartinez/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400  cursor-pointer w-8 hover:text-zinc-300 px-3 py-2 rounded-md text-sm font-medium"
          >
            <i className="fa fa-linkedin text-xl mr-2 mb-12 text-black dark:text-white" />
          </a>
          <svg
            className="ml-2.5 w-8"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M 10,10 V 200" stroke="#5C5C62" strokeWidth="2" />
          </svg>
        </div>
        <div className="overview-right ">
          <a
            className="dark:hover:text-zinc-300 hover:text-zinc-600 dark:text-gray-400 text-black"
            href="mailto:pepimartinez@protonmail.com"
          >
            pepimartinez@protonmail.com
          </a>
          <svg
            className="ml-2.5"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path d="M 10,10 V 200" stroke="#5C5C62" strokeWidth="2" />
          </svg>
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          {children}
          <div className="sticky top-[100vh]">
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
