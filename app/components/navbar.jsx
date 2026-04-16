// @flow strict

import Link from "next/link";
import { personalData } from "@/utils/data/personal-data";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-[#16f2b3] text-2xl font-bold">
          {personalData.name}
        </Link>

        <ul className="flex gap-6 text-white text-sm md:text-base">
          <li><Link href="#about">About</Link></li>
          <li><Link href="#experience">Experience</Link></li>
          <li><Link href="#skills">Skills</Link></li>
          <li><Link href="#education">Education</Link></li>
          <li><Link href="#projects">Projects</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;