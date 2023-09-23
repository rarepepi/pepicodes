import Projects from "@/components/pages/Projects";

export default function ProjectsPage() {
  return (
    <>
      <main>
        <div className="w-full flex-col justify-center ">
          <div className="w-full flex flex-col items-center justify-center">
            <Projects />
          </div>
        </div>
      </main>
    </>
  );
}
