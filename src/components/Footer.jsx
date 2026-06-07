import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 max-w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>.NET & React Development</p>
          <p>Enterprise API & Microservices</p>
          <p>Cloud Integration & DevOps</p>
        </div>

        <div className="flex flex-col gap-1 md:items-center">
          <p>3 Years of Experience</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>

        <div className="flex flex-col gap-1 md:items-end">
          <p>Worldwide Available</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          Ramesh Ayyala
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Ramesh Ayyala | Built with React
          </p>
        </div>

        <div className="flex flex-col gap-2 md:items-center font-bold">
          <a href="mailto:ayyalarameshnaidu@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">ayyalarameshnaidu@gmail.com</a>
          <a href="tel:+917989419864" className="hover:text-white transition-colors">+91 79894 19864</a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <a href="https://linkedin.com/in/ramesh-naidu-ayyala" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">LinkedIn</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">Hyderabad, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
