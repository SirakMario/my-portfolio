import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        {/* nav */}
        <div className="flex flex-shrink-0 items-center">
          <a href="#">
            <Image src="/glob2.gif" width={55} height={33} alt="glob" className="lg:hidden" />
            <video src="glob.mp4"
            autoPlay
            loop
            muted
            className="hidden lg:block h-15 w-auto bg-transparent transition-all duration-300 ease-in-out hover:scale-110"></video>
          </a>
        </div>
        {/* navbar Social media icon section */}
        <div className="hidden m-8 md:flex items-center justify-center gap-4 text-3xl">
          <Link
            href="https://linkedin.com/in/sirak-tesfamariam-asfaha"
            target="_blank"
            rel="noopener noreferrer"
            arial-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://github.com/SirakMario"
            target="_blank"
            rel="noopener noreferrer"
            arial-label="GitHub"
          >
            <FaGithub />
          </Link>

          
        </div>
      </nav>
    </>
  );
}
