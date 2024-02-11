import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function TopHeader() {
  return (
    <section className="px-5 py-0 text-white">
      <div className="xl:max-w-[85%] mx-auto flex justify-between">
        <div>
          <h1 className="text-xl lg:text-4xl font-black">Liftup Academy</h1>
          <span className="text-xs">ONLINE EDUCATION & LEARNING</span>
        </div>

        <div className="flex items-center gap-4">
          <FaFacebookF className="h-6 w-6 xl:h-10 xl:w-10 bg-green-400 p-1 xl:p-2 rounded-full text-white hover:bg-green-500 transition-all duration-300 cursor-pointer hover:scale-105" />
          <FaInstagram className="h-6 w-6 xl:h-10 xl:w-10 bg-green-400 p-1 xl:p-2 rounded-full text-white hover:bg-green-500 transition-all duration-300 cursor-pointer hover:scale-105" />
          <FaTwitter className="h-6 w-6 xl:h-10 xl:w-10 bg-green-400 p-1 xl:p-2 rounded-full text-white hover:bg-green-500 transition-all duration-300 cursor-pointer hover:scale-105" />
        </div>
      </div>
    </section>
  );
}
