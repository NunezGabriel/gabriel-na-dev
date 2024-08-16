import { MdOutlineMail } from "react-icons/md";

export default function NavbarComponent() {
  return (
    <nav className="md:px-10 mb-4">
      <div className=" p-6 flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="bg-[#242424] rounded-full border-[0.1px] border-gray-700 p-2">
            <MdOutlineMail color="f0ffff" size={17} />
          </div>
          <a
            href=""
            className="text-[14px] font-extralight hover:text-white ease-in-out duration-300"
          >
            My email
          </a>
        </div>
        <div className="flex gap-1 md:gap-3 text-[14px] font-extralight cursor-pointer">
          <a className="hover:text-white ease-in-out duration-300" href="">
            Linkedin
          </a>
          <p>/</p>
          <a className="hover:text-white ease-in-out duration-300" href="">
            Github
          </a>
          <p>/</p>
          <a className="hover:text-white ease-in-out duration-300" href="">
            Twitter
          </a>
        </div>
      </div>
    </nav>
  );
}
