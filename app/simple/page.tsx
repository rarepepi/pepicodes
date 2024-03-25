import MainContent from "@/components/pages/MainContent";

export default function Page() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function addBodyClass() {
  //     await sleep(1000);
  //     document.body.classList.add("loaded");
  //     setLoading(false);
  //   }

  //   addBodyClass();
  // }, []);
  return (
    <>
      <main className="px-20 py-20">
        <MainContent />
        {/* {loading ? <span className="loader"></span> : <MainContent />} */}
      </main>
    </>
  );
}
