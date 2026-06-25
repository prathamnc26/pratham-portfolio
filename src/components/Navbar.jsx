import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink =
    "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition";

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-5 backdrop-blur-md bg-black/40 text-white z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">PC</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          <li><a className={navLink} href="#home">Home</a></li>
          <li><a className={navLink} href="#about">About</a></li>
          <li><a className={navLink} href="#education">Education</a></li>
          <li><a className={navLink} href="#experience">Experience</a></li>
          <li><a className={navLink} href="#skills">Skills</a></li>
          <li><a className={navLink} href="#projects">Projects</a></li>
          <li><a className={navLink} href="#certifications">Certifications</a></li>
          <li><a className={navLink} href="#contact">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden mt-6 flex flex-col gap-4">
          <li><a onClick={() => setOpen(false)} className={navLink} href="#home">Home</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#about">About</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#education">Education</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#experience">Experience</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#skills">Skills</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#projects">Projects</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#certifications">Certifications</a></li>
          <li><a onClick={() => setOpen(false)} className={navLink} href="#contact">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;