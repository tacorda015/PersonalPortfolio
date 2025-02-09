import PaperPlane from "@/components/Icons/paper-plane";

export default function ContactPage() {
  return (
    <div id="contact" className='h-auto flex flex-col gap-5 items-center pb-52 pt-48 text-center'>
      <div className="flex justify-center">
        <PaperPlane className="fill-[#64ffda] w-12 h-12 z-10" />
      </div>
      <div className="text-slate-200 text-4xl font-bold">Let’s Build Something Together</div>
      <div className="text-slate-400 text-lg w-4/5 md:w-3/5 mx-auto">I’m currently open to new opportunities and freelance projects. Whether you need a full-stack overhaul, API integration, or a performance boost for your app, let’s connect!</div>
      <div className="flex gap-4">
        <button className="outline outline-1 outline-[#64ffda] py-2 px-3 rounded-md text-[#64ffda] hover:scale-105 w-fit mt-10">Say Hello</button>
        <button type="button" className="outline outline-1 outline-[#64ffda] py-2 px-3 rounded-md text-[#64ffda] hover:scale-105 w-fit mt-10" onClick={() => window.open('/EduardoTacorda.pdf', '_blank')}>Grab a Resume Copy</button>
      </div>
    </div>
  )
}
