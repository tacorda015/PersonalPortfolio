import AboutImage from '@/public/Images/PersonalImageCrop2.png'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div id="about" className='min-h-screen w-full flex flex-col px-7 md:px-32 pb-5 pt-24'>
      <span className='text-center font-extrabold text-3xl mb-2 text-slate-200'>A Bit About Me</span>
      <hr className='w-24 h-1 rounded-full shadow mx-auto bg-[#64ffda]  mb-10' />
      
      <div className="flex flex-col-reverse md:flex-row gap-10 text-slate-400 text-justify">
        <div className="flex-1 flex flex-col gap-10">
          <span className=''>
            I'm a passionate Full Stack Developer with a strong foundation in web development and a love for solving complex problems. I graduated in April 2024 and immediately started my career at M.A. TECHNOLOGY INC., where I work on diverse projects using Next.js, Laravel, and other modern technologies.
          </span>
          <span className=''>
            During my internship at Hayakawa Electronics Phils. Corp, I gained valuable experience in maintaining and developing web applications. My capstone project, the NSTP Registration and Student Portal, was a 7-month journey where I honed my skills in PHP, JavaScript, and Bootstrap.
          </span>
          <span className=''>
            I'm always eager to learn new technologies and take on challenges that push me to grow as a developer. Let's connect and create something extraordinary!
          </span>
        </div>

        <div className="flex-1 my-3">
        <div className="flex h-96 w-72 relative mx-auto">
            <Image 
              src={AboutImage} 
              alt='About Image' 
              fill 
              className="object-cover drop-shadow-[0px_10px_20px_rgba(100,255,218,0.6)] hover:scale-105" // Drop shadow applied to image
            />
          </div>
        </div>
      </div>
    </div>
  )
}
