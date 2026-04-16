// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between py-16 px-6">

      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
          Hello, <br />

          This is{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {personalData.name}
          </span>
          , <br />

          I'm a{" "}
          <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
            {personalData.designation}
          </span>
        </h1>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-6">
          {personalData.github && (
            <Link href={personalData.github} target="_blank">
              <BsGithub size={30} className="text-pink-500 hover:scale-110 transition" />
            </Link>
          )}

          {personalData.linkedIn && (
            <Link href={personalData.linkedIn} target="_blank">
              <BsLinkedin size={30} className="text-pink-500 hover:scale-110 transition" />
            </Link>
          )}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 mt-8">
          <Link
            href="#contact"
            className="px-6 py-3 border border-pink-500 rounded-full text-white flex items-center gap-2 hover:bg-pink-500 transition"
          >
            Contact Me <RiContactsFill />
          </Link>

          <Link
            href={personalData.resume || "/resume.pdf"}
            target="_blank"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white flex items-center gap-2 hover:scale-105 transition"
          >
            Get Resume <MdDownload />
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE (COLORED CODE BLOCK) */}
      <div className="mt-10 lg:mt-0 bg-[#0d1224] border border-[#1b2c68] rounded-lg p-6 text-sm w-full max-w-md font-mono">

        <p>
          <span className="text-pink-500">const</span>{" "}
          <span className="text-white">coder</span>{" "}
          <span className="text-pink-500">=</span> {"{"}
        </p>

        <p className="ml-4">
          name: <span className="text-yellow-300">"{personalData.name}"</span>,
        </p>

        <p className="ml-4">
          skills:{" "}
          <span className="text-yellow-300">
            ["React", "Next.js", "TypeScript", "Java"]
          </span>,
        </p>

        <p className="ml-4">
          hardworker: <span className="text-green-400">true</span>,
        </p>

        <p className="ml-4">
          quickLearner: <span className="text-green-400">true</span>,
        </p>

        <p className="ml-4">
          problemSolver: <span className="text-green-400">true</span>,
        </p>

        <p className="ml-4">
          hireable: <span className="text-blue-400">function</span>() {"{"}
        </p>

        <p className="ml-8">
          <span className="text-pink-500">return</span> (
        </p>

        <p className="ml-12 text-white">
          this.hardworker {"&&"}
        </p>

        <p className="ml-12 text-white">
          this.problemSolver {"&&"}
        </p>

        <p className="ml-12 text-white">
          this.skills.length {">="} 5
        </p>

        <p className="ml-8">);</p>

        <p className="ml-4">{"},"}</p>

        <p>{"};"}</p>
      </div>

    </section>
  );
}

export default HeroSection;