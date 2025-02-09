import Image from "next/image";

const technologies = [
  { name: "Next.js", src: "/Images/nextjs.png" },
  { name: "Laravel", src: "/Images/laravel.png" },
  { name: "JavaScript", src: "/Images/javascript.png" },
  { name: "PHP", src: "/Images/php.png" },
  { name: "MySQL", src: "/Images/mysql.png" },
  { name: "HTML", src: "/Images/html.png" },
  { name: "TailwindCSS", src: "/Images/tailwind.png" },
  { name: "Bootstrap", src: "/Images/bootstrap.png" },
  { name: "API Integration", src: "/Images/api.png" },
  { name: "Node.js", src: "/Images/nodejs.png" },
  { name: "React Native", src: "/Images/react-native.png" },
  { name: "CSS", src: "/Images/css.png" },
  { name: "jQuery", src: "/Images/jquery.png" },
  { name: "IIS", src: "/Images/iis.png" },
  { name: "Nginx", src: "/Images/nginx.png" },
  { name: "PM2", src: "/Images/pm2.png" },
  { name: "WebSocket", src: "/Images/websocket.png" },
];

export default function TechnologyStack() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-100 py-4">
      {/* Gradient Overlays */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-100 to-transparent z-[1]"
      ></div>
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-100 to-transparent z-[1]"
      ></div>

      {/* Scrolling List */}
      <div className="animate-scroll flex">
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex flex-col gap-2 justify-around items-center mx-6 shrink-0">
            <Image src={tech.src} alt={tech.name} width={50} height={50} />
            <span className="text-lg font-medium text-slate-400 ml-2">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}