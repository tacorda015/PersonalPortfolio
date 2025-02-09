import Logo from '@/public/Images/Logo2.png';
import Image from "next/image";
import Link from "next/link";

export default function Navigation({is_scroll}) {
  return (
    <header className="fixed w-full top-0 h-20 z-10 text-slate-400">
      <nav className={`mx-auto p-4 h-full flex items-center justify-between font-extrabold ${is_scroll ? 'shadow-lg bg-black bg-opacity-90 text-[#64ffda]' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="rounded-full shadow h-11 w-11 flex justify-center items-center ">
            <Image src={Logo} alt="Logo"/>
          </div>
          <span className="text-lg">Eduardo Tacorda</span>
        </div>
        <div className="flex items-center gap-3">
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#about'}>About</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#experience'}>Experience</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#work'}>Work</Link>
          <Link className="p-2 cursor-pointer hover:text-gray-500 uppercase" href={'#contact'}>Contact</Link>
        </div>
      </nav>
    </header>
  )
}
