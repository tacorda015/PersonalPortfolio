import Logo from '@/public/Images/Logo2.png';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Bars from './Icons/bars';
import XIcon from './Icons/xIcon';

export default function Navigation({ is_scroll }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 h-20 z-20 text-slate-400">
      <nav
        className={`mx-auto p-4 h-full flex items-center justify-between font-extrabold ${
          is_scroll ? 'shadow-lg bg-black bg-opacity-90 text-[#64ffda]' : ''
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full shadow h-11 w-11 flex justify-center items-center">
            <Image src={Logo} alt="Logo" />
          </div>
          <span className="text-lg">Eduardo Tacorda</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#about'}>About</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#experience'}>Experience</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#work'}>Work</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#contact'}>Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden z-[21]">
          <button type="button"  onClick={() => {setIsOpen(!isOpen), console.log('click')}} >
            {isOpen ? (
              <XIcon className="cursor-pointer fill-white"/>
            ) : (
              <Bars className="cursor-pointer fill-white"/>
            )}
            </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-full bg-black bg-opacity-90 p-4 flex flex-col items-center space-y-4 text-[#64ffda] z-10">
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#about'} onClick={() => setIsOpen(false)}>About</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#experience'} onClick={() => setIsOpen(false)}>Experience</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#work'} onClick={() => setIsOpen(false)}>Work</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#contact'} onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
