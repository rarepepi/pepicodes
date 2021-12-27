import React, { useContext } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";
import toast, { Toaster } from "react-hot-toast";
import MainContent from "../components/MainContent";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Head from "next/head";

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
    await sleep(5000);
    this.setState({ loading: true });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobile: window.innerWidth <= 600 });
  }

  render() {
    return (
      <div className="">
        <video
          autoplay="true"
          muted
          loop
          className="fixed cover -z-10 left-0 bottom-0 right-0 min-w-full min-h-full"
        >
          <source src="/vid/video.mp4" type="video/mp4" />
        </video>
        <Fade>
          <Head>
            <title>Pepi Codes</title>
            <meta name="description" content="Pepi Martinez Portfolio" />
          </Head>
          <div className="w-full">
            <div className="shadow-lg">
              <TopNav />
            </div>
            <section className="-mt-6 p-16 ">
              <MainContent />
            </section>
          </div>
          <section className="mt-16 bg-bg-light absolute bottom-0 w-full">
            <Footer />
          </section>
        </Fade>
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
