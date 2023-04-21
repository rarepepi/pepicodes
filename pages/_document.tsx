import { Html, Head, Main, NextScript } from "next/document";
import { NextSeo } from "next-seo";

export default function Document() {
  return (
    <Html lang="en" className="bg-background font-poppins">
      <Head>
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
      </Head>
      <NextSeo
        openGraph={{
          type: "website",
          url: "https://pepi.codes",
          title: "Pepi Codes - Portfolio",
          description:
            "Pepi Martinez personal site displaying: projects, papers, and more.",
          images: [
            {
              url: "https://pepi.codes/img/logo.png",
              width: 800,
              height: 600,
              alt: "Pepi Codes Logo",
            },
          ],
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
