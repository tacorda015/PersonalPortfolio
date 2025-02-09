import Code from "@/components/Icons/code";
import Database from "@/components/Icons/database";
import Desktop from "@/components/Icons/desktop";
import MobileScreenButton from "@/components/Icons/mobile-screen-button";

export default function ExperiencePage() {
  // Calculate experience in years and months
  const startDate = new Date(2023, 9); // October 2023 (Month is 0-indexed)
  const currentDate = new Date();
  const diffInMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  return (
    <div id="experience" className="min-h-screen flex flex-col gap-8 items-center px-7 md:px-32 pt-24 text-center">
      <div className="text-slate-200 text-4xl font-bold">What I Do</div>

      <div>
        <p className="text-slate-400 text-center mb-2">
          I am a <strong>Full Stack Developer</strong> with{' '}
          <strong>
            {years} {years === 1 ? 'year' : 'years'} and {months}{' '}
            {months === 1 ? 'month' : 'months'}
          </strong>{' '}
          of professional experience. I am always eager to learn more and grow
          in this fast-paced industry.
        </p>
        <p className="text-slate-400 mb-6 text-center">I specialize in building modern, scalable web applications that deliver seamless user experiences and robust functionality. From crafting pixel-perfect designs to managing complex databases, I bring ideas to life with a focus on performance, security, and maintainability.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 text-slate-400 max-w-4xl">

        <div className="p-5 border-b border-e-0 md:border-e">
          <div className="flex flex-col gap-3 items-center">
            <Desktop className="fill-[#64ffda]" height="40px" width="40px" />
            <span className="font-bold text-xl text-slate-200">Web Development</span>
          </div>
          <p>Full-cycle development of dynamic, user-friendly websites and applications.</p>
        </div>

        <div className="p-5 border-b border-t md:border-t-0 border-s-0 md:border-s">
          <div className="flex flex-col gap-3 items-center">
            <MobileScreenButton className="fill-[#64ffda]" height="40px" width="40px" />
            <span className="font-bold text-xl text-slate-200">Responsive Design</span>
          </div>
          <p>Creating designs that look and work flawlessly on all devices.</p>
        </div>

        <div className="p-5 border-y border-e-0 md:border-e">
          <div className="flex flex-col gap-3 items-center">
            <Code className="fill-[#64ffda]" height="40px" width="40px" />
            <span className="font-bold text-xl text-slate-200">Frontend Development</span>
          </div>
          <p>Building interactive, high-performance UIs with modern frameworks like Next.js.</p>
        </div>

        <div className="p-5 border-y border-s-0 md:border-s">
          <div className="flex flex-col gap-3 items-center">
            <Database className="fill-[#64ffda]" height="40px" width="40px" />
            <span className="font-bold text-xl text-slate-200">Backend Development</span>
          </div>
          <p>Developing secure, scalable server-side logic using Laravel and Node.js.</p>
        </div>

        <div className="p-5 border-t border-b md:border-b-0 border-e-0 md:border-e">
          <div className="flex flex-col gap-3 items-center">
            <Code className="fill-[#64ffda]" height="40px" width="40px" />
            <span className="font-bold text-xl text-slate-200">API Integration</span>
          </div>
          <p>Seamlessly connecting systems and services for smooth data flow.</p>
        </div>

        <div className="p-5 border-t border-s-0 md:border-s">
          <div className="flex flex-col gap-3 items-center">
            <Database className="fill-[#64ffda]" height="40px" width="40px" />
            <span className="font-bold text-xl text-slate-200">Database Management</span>
          </div>
          <p>Designing and optimizing databases (MySQL, MS SQL) for efficiency and reliability.</p>
        </div>

      </div>
    </div>
  );
}
