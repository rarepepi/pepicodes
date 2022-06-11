import React, { useContext } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";
import toast, { Toaster } from "react-hot-toast";
import MainContent from "../components/MainContent";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Head from "next/head";
import Projects from "../components/Projects";
import BackgroundMagic from "../components/BackgroundMagic";
import Papers from "../components/Papers";
import About from "../components/About";
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      loading: true,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    await sleep(2000);
    this.setState({ loading: false });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth <= 600 });
  }

  render() {
    return (
      <div className="flex justify-center flex-col">
        {this.state.loading && <span className="loader"></span>}
        {!this.state.loading && (
          <>
            <BackgroundMagic />
            <div className="overview">
              <a
                href="https://twitter.com/rarepepi"
                target="_blank"
                className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <i className="fab fa-twitter text-xl mr-2" />
              </a>
              <a
                href="https://github.com/rarepepi"
                target="_blank"
                className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <i className="fab fa-github text-xl mr-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/pepimartinez/"
                target="_blank"
                className="text-gray-200 hover:bg-gray-700 cursor-pointer	 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <i className="fab fa-linkedin text-xl mr-2" />
              </a>
            </div>
            <Fade>
              <Head>
                <title>Pepi Codes</title>
                <meta name="description" content="Pepi Codes" />
              </Head>
              <div className="">
                <div className="">
                  <TopNav />
                </div>
                <section className="-mt-6 p-8 mb-16 ">
                  <MainContent />
                </section>
                <section className="mb-32 p-8">
                  <About />
                </section>
                <section className="mb-32 p-8">
                  <Projects />
                </section>
                <section className="mb-32 p-8">
                  <Papers />
                </section>
              </div>
              <section className="mt-16 w-full">
                <Footer />
              </section>
            </Fade>
          </>
        )}
        <style jsx>
          {`
            .overview {
              position: fixed;
              bottom: 2%;
              left: 5%;
              display: flex;
              flex-direction: column;
              z-index: 5;
            }

            @media only screen and (max-width: 1200px) {
              .overview {
                position: relative !important;
                display: none !important;
              }
            }
          `}
        </style>
      </div>
    );
  }
}
export async function getServerSideProps({ req, res }) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {
      time: new Date().toISOString(),
    },
  };
}
export default HomePage;
