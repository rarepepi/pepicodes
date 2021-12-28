import React, { useContext } from "react";
import { Zoom, Fade, Flip, Slide } from "react-reveal";
import toast, { Toaster } from "react-hot-toast";
import MainContent from "../components/MainContent";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";
import Head from "next/head";
import MyWork from "../components/MyWork";
import BackgroundMagic from "../components/BackgroundMagic";
import Papers from "../components/Papers";
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
        <BackgroundMagic />
        <Fade>
          <Head>
            <title>Pepi Codes</title>
            <meta name="description" content="Pepi Martinez Portfolio" />
          </Head>
          <div className="">
            <div className="">
              <TopNav />
            </div>
            <section className="-mt-6 p-16 ">
              <MainContent />
            </section>
            <section className="">
              <MyWork />
            </section>
            <section className="">
              <Papers />
            </section>
          </div>
          <section className="mt-16 w-full">
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
