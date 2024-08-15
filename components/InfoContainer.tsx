import { RiFileDownloadLine } from "react-icons/ri";

export default function InfoContainer() {
  return (
    <div className=" p-3 flex flex-col justify-center items-center gap-7">
      <img
        className="h-[119px] w-[119px] rounded-full"
        src="./face.jpeg"
        alt=""
      />
      <section className="flex flex-col gap-3 text-center max-w-[600px]">
        <p className="text-lg font-extralight ">Hi. I'm Gabriel </p>
        <p className="text-4xl font-black gradient-text-color">
          Software Developer, Crafting nice solutions through code.
        </p>
      </section>

      <button className="bg-[#242424] flex justify-center items-center gap-2 py-3 px-10 border-[0.1px] border-gray-700 hover:text-white ease-in-out duration-300">
        Download CV
        <RiFileDownloadLine color="fffff" size={19} />
      </button>
    </div>
  );
}
