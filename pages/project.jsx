import Image from 'next/image'


export default function ProjectPage() {
  return (
    <div id="work" className='min-h-screen flex flex-col gap-8 items-center px-7 md:px-32 pt-24 text-center'>
      <div className="text-slate-200 text-4xl font-bold">Some of My Work</div>

      {/* First Project */}
      <div className="flex justify-end w-full mt-5 text-[#64ffda] relative">
        <div className="hidden lg:block border rounded-lg shadow-md shadow-[#64ffda] h-64 w-[460px] absolute top-1/2 -translate-y-1/2 left-0">
          <Image src={'/Images/FacilityWorkOrder.jfif'} alt={'Facility'} fill />
        </div>
        <div className="flex flex-col gap-4 text-right">
          <span className="text-sm font-semibold">Feature Project</span>
          <span className="text-2xl md:text-xl font-bold text-white hover:text-[#64ffda]">Facility Work Order</span>

          <span className="bg-[#0b172e] rounded-md w-[500px] z-[1] shadow-[#64ffda] shadow p-3 text-slate-400 text-justify">
            The Facility Work Order Management System streamlines maintenance and service requests by allowing admins to manage users, assign roles, and configure department-specific approval workflows. Requestors can submit work orders, upload attachments, and track their status in real time, while each department follows a customized approval chain to ensure efficient processing. This system enhances accountability, optimizes workflow management, and improves overall operational efficiency.
          </span>

          <div className="border h-auto w-full block lg:hidden">
              <Image src={'/Images/FacilityWorkOrder.jfif'} alt={'Facility'} height={500} width={500} />
          </div>

          <div>
            <ul className="flex gap-3 text-slate-400 justify-end flex-wrap">
              <li className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Next.js</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Laravel</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>API</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>IIS</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>MS SQL</li>
            </ul>
          </div>
        </div>
      </div>
      

      {/* Second Project */}
      <div className="flex justify-start w-full mt-16 text-[#64ffda] relative">
        <div className="hidden lg:block border rounded-lg shadow-md shadow-[#64ffda] h-64 w-[460px] absolute top-1/2 -translate-y-1/2 right-0">
          <Image src={'/Images/QualitySystem.jfif'} alt={'Facility'} fill />
        </div>
        <div className="flex flex-col gap-4 text-left">
          <span className="text-sm font-semibold">Feature Project</span>
          <span className="text-2xl md:text-xl font-bold text-white hover:text-[#64ffda]">Quality System</span>

          <span className="bg-[#0b172e] rounded-md w-[500px] z-[1] shadow-[#64ffda] shadow p-3 text-slate-400 text-justify">
            The Quality System ensures efficient material tracking and inspection. It receives materials from the packing department using a scanner, where users scan packing labels to mark materials as received in the database. During inspection, users fill out an Outgoing Inspection Report (OIR), which undergoes an approval process. Once approved, the materials are scanned again for transfer to the Finished Goods area, ensuring accuracy, traceability, and quality control throughout the process.
          </span>

          <div className="border h-auto w-full block lg:hidden">
              <Image src={'/Images/QualitySystem.jfif'} alt={'Facility'} height={500} width={500} />
          </div>

          <div>
            <ul className="flex gap-3 text-slate-400 justify-start flex-wrap">
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Next.js</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Laravel</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>API</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>IIS</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>MS SQL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Third Project */}
      <div className="flex justify-end w-full mt-16 text-[#64ffda] relative">
        <div className="hidden lg:block border rounded-lg shadow-md shadow-[#64ffda] h-64 w-[460px] absolute top-1/2 -translate-y-1/2 left-0">
          <Image src={'/Images/ProductionOutputMonitoring.jfif'} alt={'Facility'} fill />
        </div>
        <div className="flex flex-col gap-4 text-right items-end">
          <span className="text-sm font-semibold">Feature Project</span>
          <span className="text-2xl md:text-xl font-bold text-white hover:text-[#64ffda]">Output Monitoring System</span>

          <span className="bg-[#0b172e] rounded-md w-[500px] z-[1] shadow-[#64ffda] shadow p-3 text-slate-400 text-justify">
            The Output Monitoring System provides real-time data visualization using graphs for easy interpretation. It leverages WebSockets to update data dynamically without requiring a page refresh, ensuring seamless monitoring. The system translates raw data into intuitive graphical representations, allowing users to track performance and trends efficiently.
          </span>

          <div className="border h-auto block lg:hidden">
              <Image src={'/Images/ProductionOutputMonitoring.jfif'} alt={'Facility'} height={500} width={500} />
          </div>

          <div>
            <ul className="flex gap-3 text-slate-400 justify-end flex-wrap">
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Next.js</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Laravel</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>API</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Websocket (Socket.IO)</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Node JS</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Nginx</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>PM2</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>MS SQL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fourth Project */}
      <div className="flex justify-start w-full mt-16 text-[#64ffda] relative">
        <div className="hidden lg:block border rounded-lg shadow-md shadow-[#64ffda] h-64 w-[460px] absolute top-1/2 -translate-y-1/2 right-0">
          <Image src={'/Images/TodoList.png'} alt={'Facility'} fill />
        </div>
        <div className="flex flex-col gap-4 text-left">
          <span className="text-sm font-semibold">Feature Project</span>
          <span className="text-2xl md:text-xl font-bold text-white hover:text-[#64ffda]">Todo List</span>

          <span className="bg-[#0b172e] rounded-md w-[500px] z-[1] shadow-[#64ffda] shadow p-3 text-slate-400 text-justify">
            The Todo List System offers a flexible task management experience, allowing users to add custom columns beyond the standard To-Do, Ongoing, and Done. Users can personalize column colors to match their preferences and utilize drag-and-drop functionality for seamless task organization. This system enhances productivity by providing a fully customizable and visually intuitive workflow.
          </span>

          <div className="border h-auto w-fit block lg:hidden">
              <Image src={'/Images/TodoList.png'} alt={'Facility'} height={500} width={500} />
          </div>

          <div>
            <ul className="flex gap-3 text-slate-400 justify-start flex-wrap">
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>PHP</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>HTML</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Bootstrap</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>Dragula.js</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>JQuery</li>
              <li  className='border px-2 py-1 rounded-full shadow shadow-[#64ffda] hover:bg-[#64ffda] hover:text-black hover:cursor-pointer text-nowrap'>MySQL</li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
