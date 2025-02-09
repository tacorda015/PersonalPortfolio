import ArrowDown from '@/components/Icons/arrow-down';
import HeroImage from '@/public/Images/HeroImage.jpg';
import Link from 'next/link';

export default function HeroPage() {
  return (
    <div id="hero" className="relative h-screen w-full p-3 pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center brightness-50 bg-fixed will-change-transform" style={{ backgroundImage: `url(${HeroImage.src})` }} ></div>
      
      {/* Hero Content */}
      <div className="relative flex flex-col gap-5 text-slate-400 justify-center items-center pt-[13%] pb-[5%] px-0">
        {/* Add your content here */}
        <span className="text-slate-400 text-6xl font-bold text-center">Hi, I'm Eduardo</span>
        <span className='text-center text-2xl'>Full Stack Developer | Bridging Ideas & Execution</span>
      </div>

      <Link className="absolute bottom-10 left-1/2 transform -translate-x-1/2" role='button' href={'#about'}>
        <ArrowDown className="fill-[#64ffda] w-12 h-12 z-10" />
      </Link>
    </div>
  );
}
