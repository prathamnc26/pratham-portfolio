
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-5 flex justify-between items-center backdrop-blur-md text-white z-50">
      <h1 className="text-2xl font-bold">PC</h1>

      <ul className="flex gap-8 text-sm">
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#home">Home</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#about">About</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#education">Education</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#experience">Experience</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#skills">Skills</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#projects">Projects</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#contact">Contact</a></li>
        <li><a className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full text-sm text-white/80 hover:text-white transition" href="#certifications">Certifications</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;