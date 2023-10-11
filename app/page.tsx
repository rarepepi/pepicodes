"use client";
import MainContent from "@/components/pages/MainContent";
import { useState, useEffect } from "react";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function addBodyClass() {
      await sleep(1000);
      document.body.classList.add("loaded");
      setLoading(false);
    }

    addBodyClass();
  }, []);
  return (
    <>
      <main className="">
        {loading ? <span className="loader"></span> : <MainContent />}
      </main>
    </>
  );
}
