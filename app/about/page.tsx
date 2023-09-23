"use client";
import About from "@/components/pages/About";

export default function AboutPage() {
  return (
    <>
      <main className="">
        <div className="w-full flex-col justify-center ">
          <div className="w-full flex flex-col items-center justify-center">
            <About />
          </div>
        </div>
      </main>
    </>
  );
}
