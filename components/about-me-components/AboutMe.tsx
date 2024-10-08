import Link from "next/link";

export default function Aboutme() {
  return (
    <div className="md:px-16 md:py-0 p-6 flex flex-col gap-16 max-w-[1600px] mx-auto">
      <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 md:max-w-[550px] md:gap-y-10 md:gap-x-[90px]">
        <p className="text-4xl  lg:text-6xl col-start-1 col-span-1 text-gray-200 font-black">
          Gabriel
        </p>
        <p className="text-4xl max-w-[550px] col-start-2 col-span-1 lg:text-6xl text-gray-200 font-black">
          Emilio
        </p>
        <p className="text-4xl max-w-[550px] lg:text-6xl row-start-2 col-start-2 col-span-1 text-gray-200 font-black">
          Nunez
        </p>
        <p className="text-4xl max-w-[550px] lg:text-6xl text-gray-200 row-start-2 col-start-3 col-span-1 font-black">
          Arenas
        </p>
      </div>
      <p className="text-4xl md:hidden lg:text-6xl max-w-[550px] col-start-1 col-span-1 text-gray-200 font-black">
        Gabriel Emilio Nunez Arenas
      </p>
      <div className="">
        <div className="grid grid-rows-3 mx-auto max-w-[1000px] grid-cols-2 md:gap-12 gap-3 w-full lg:grid-cols-3">
          <img
            src="./mirrorFace.jpeg"
            alt=""
            className="rounded-lg s border row-span-2"
          />
          <img
            src="./dogs.jpeg"
            alt=""
            className="rounded-lg row-span-2 row-start-2 col-start-2 "
          />
          <img
            src="./dogs.jpeg"
            alt=""
            className="hidden lg:block rounded-lg row-span-2 row-start-1 col-start-3 "
          />
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:mb-6">
        <div>
          <p
            className="text-xl text-[#1cff95] font-extralight tracking-widest 
          md:text-xl lg:text-3xl"
          >
            INFO
          </p>
        </div>
        <div className="mx-auto">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] md:text-lg lg:text-2xl max-w-[1300px]">
            <p className="">
              I'm a software developer with a strong passion for technology and
              innovation, and I will soon be a software engineer. I specialize
              in web development technologies, both frontend and backend, skills
              that you can explore in the Skills section. When programming, I
              focus on implementing best practices, creating code that is
              scalable and easy to maintain. <br></br>
              <br></br>As for my social skills, punctuality has characterized me
              since I was young, something I learned from my family. I'm a
              sociable person and enjoy working in teams, as I firmly believe in
              the value of mutual growth: I like to share my knowledge and learn
              from others. Additionally, I am open-minded, always respecting
              everyone’s tastes and opinions.{" "}
            </p>
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4">
              <img src="./setup.jpeg" alt="" className="rounded-lg" />
              <p className="text-end">SetUp</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 lg:mb-6 lg:mt-[100px]">
        <div>
          <p
            className="text-xl text-[#1cff95] font-extralight tracking-widest 
          md:text-xl lg:text-3xl "
          >
            EDUCATION
          </p>
        </div>
        <div className="gap-12 mx-auto flex flex-col lg:mb-6 lg:mt-[100px]">
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1300px] lg:mb-16">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4">
              <img src="./match.jpeg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg lg:text-2xl">UCSP Campus</p>
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl lg:text-4xl text-gray-200 font-black">
                San Pablo Catholic University (UCSP)
              </h1>
              <h2 className="text-xl lg:text-3xl text-gray-300">
                Computer Science Degree
              </h2>
              <p className="lg:text-2xl text-gray-400">2021 - 2023</p>
              <p className="lg:text-2xl text-gray-400">
                Bachelor's degree in computer science - not completed
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1300px] lg:mb-16">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4 lg:col-start-2 lg:col-span-1">
              <img
                src="./campusTecsup.jpeg"
                alt=""
                className="rounded-lg max-h-[600px]"
              />
              <p className="text-end md:text-lg lg:text-2xl">
                Tecsup Campus In Afternoon
              </p>
            </div>
            <div className="space-y-2 lg:col-start-1 lg:col-span-1 lg:row-start-1">
              <h1 className="text-2xl lg:text-4xl text-gray-200 font-black">
                Tecsup Technological Institute
              </h1>
              <h2 className="text-xl lg:text-3xl text-gray-300">
                Software design and development Degree
              </h2>
              <p className="lg:text-2xl text-gray-400">2024 - Now</p>
              <p className="lg:text-2xl text-gray-400">
                technical bachelor in software development - Current
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1300px] lg:mb-16">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4 ">
              <img src="./codeableEgre.jpeg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg lg:text-2xl">
                Tecsup Campus In Afternoon
              </p>
            </div>
            <div className="space-y-2 ">
              <h1 className="text-2xl lg:text-4xl text-gray-200 font-black">
                {"{"} Codeable {"}"}
              </h1>
              <h2 className="text-xl lg:text-3xl text-gray-300">
                Full Stack Web Programming Bootcamp
              </h2>
              <p className="lg:text-2xl text-gray-400">2023 - 2023</p>
              <p className="lg:text-2xl text-gray-400">
                Full stack web developer - Graduate
              </p>
            </div>
          </div>

          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] max-w-[1300px] ">
            <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4 lg:col-start-2 lg:col-span-1">
              <img src="./match.jpeg" alt="" className="rounded-lg" />
              <p className="text-end md:text-lg lg:text-2xl">UPC Campus</p>
            </div>
            <div className="space-y-2 lg:col-span-1 lg:row-start-1">
              <h1 className="text-2xl lg:text-4xl text-gray-200 font-black">
                Peruvian University of Applied Sciences (UPC)
              </h1>
              <h2 className="text-xl lg:text-3xl text-gray-300">
                Software Engineering Degree
              </h2>
              <p className="lg:text-2xl text-gray-400">Soon</p>
              <p className="lg:text-2xl text-gray-400">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 mb-9 lg:mt-[50px]">
        <div>
          <p
            className="text-xl text-[#1cff95] font-extralight tracking-widest 
          md:text-xl lg:text-3xl "
          >
            GET IN TOUCH
          </p>
        </div>
        <div className="mx-auto space-y-12">
          <h2 className="text-xl max-w-[1000px] lg:text-2xl text-gray-300">
            I'm looking for new opportunities and challenges so do not hesitate
            to write to me. my inbox is always open. Whether you have a question
            or just want to say hi.
          </h2>
          <section className="grid md:grid-cols-2 md:grid-rows-2 md:gap-12 grid-cols-1 grid-rows-4 gap-8">
            <Link
              href={""}
              className="rounded-lg bg-[#242424] flex justify-center items-center gap-2 py-5 md:py-10 px-10 border-[0.1px] border-gray-700 hover:text-[#1cff95] 
              hover:border-[#1cff95] ease-in-out duration-300 md:text-2xl"
            >
              Linkedin
            </Link>
            <Link
              href={""}
              className="rounded-lg bg-[#242424] flex justify-center items-center gap-2 py-5 md:py-10 px-10 border-[0.1px] border-gray-700 hover:text-[#1cff95] 
              hover:border-[#1cff95] ease-in-out duration-300 md:text-2xl "
            >
              Inbox
            </Link>
            <Link
              href={""}
              className="rounded-lg bg-[#242424] flex justify-center items-center gap-2 py-5 md:py-10 px-10 border-[0.1px] border-gray-700 hover:text-[#1cff95] 
              hover:border-[#1cff95] ease-in-out duration-300 md:text-2xl "
            >
              Github
            </Link>
            <Link
              href={""}
              className="rounded-lg bg-[#242424] flex justify-center items-center gap-2 py-5 md:py-10 px-10 border-[0.1px] border-gray-700 hover:text-[#1cff95] 
              hover:border-[#1cff95] ease-in-out duration-300 md:text-2xl "
            >
              Twitter
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
