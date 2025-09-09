import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import {callbackify} from "node:util";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New project" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar/>
      <section className="main-section">
        <div className="page-heading py-16">
            <h1>ATS tracking</h1>
            <h2>Resume ai powered feedback</h2>
        </div>

      {resumes.length>0 &&(
        <div className="resume-section">
            {resumes.map((resume)=>(
                <ResumeCard key={resume.id} resume={resume}></ResumeCard>
            ))}
        </div>
      )}
      </section>
  </main>;
}
