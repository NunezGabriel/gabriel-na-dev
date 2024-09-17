import { RiFileDownloadLine } from "react-icons/ri";

export default function InfoContainer() {
  return (
    <div className=" p-3 flex flex-col lg:mt-12 justify-center items-center gap-7 lg:gap-12 mb-28">
      <img
        className="h-[119px] lg:scale-125 w-[119px] rounded-full"
        src="./face.jpeg"
        alt=""
      />
      <section className="flex flex-col gap-3 text-center max-w-[700px]">
        <p className="text-lg font-extralight md:text-lg lg:text-3xl">
          Hi. I'm Gabriel{" "}
        </p>
        <p className="text-4xl font-black green-gradient lg:text-6xl">
          Software Developer, Crafting nice solutions through code.
        </p>
      </section>

      <button className="rounded-lg bg-[#242424] flex justify-center items-center gap-2 py-3 px-10 border-[0.1px] border-gray-700 hover:text-[#1cff95] hover:border-[#1cff95] ease-in-out duration-300 lg:scale-125">
        Download CV
        <RiFileDownloadLine color="fffff" size={19} />
      </button>
    </div>
  );
}
