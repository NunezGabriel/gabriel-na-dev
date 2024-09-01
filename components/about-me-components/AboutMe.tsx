export default function Aboutme() {
  return (
    <div className="md:px-16 md:py-0 p-6 flex flex-col gap-16 max-w-[1600px] mx-auto">
      <p className="text-4xl max-w-[550px] lg:text-6xl font-black gradient-text-color">
        Gabriel Emilio Nunez Arenas
      </p>
      <div className="">
        <div className="grid grid-rows-3 mx-auto max-w-[800px] grid-cols-2 md:gap-12 gap-3 w-full">
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
        </div>
      </div>

      <div className="flex flex-col mx-auto gap-6 md-gap-8 lg:mb-6">
        <div>
          <p
            className="text-xl gradient-text-color font-extralight tracking-widest 
          md:text-xl lg:text-3xl"
          >
            INFO
          </p>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] md:text-lg lg:text-2xl max-w-[1300px]">
          <p className="">
            I'm a software developer with a strong passion for technology and
            innovation, and I will soon be a software engineer. I specialize in
            web development technologies, both frontend and backend, skills that
            you can explore in the Skills section. When programming, I focus on
            implementing best practices, creating code that is scalable and easy
            to maintain. <br></br>
            <br></br>As for my social skills, punctuality has characterized me
            since I was young, something I learned from my family. I'm a
            sociable person and enjoy working in teams, as I firmly believe in
            the value of mutual growth: I like to share my knowledge and learn
            from others. Additionally, I am open-minded, always respecting
            everyone’s tastes and opinions.{" "}
          </p>
          <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4">
            <img src="./match.jpeg" alt="" className="rounded-lg" />
            <p className="text-end">Me coding</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-auto gap-6 md-gap-8 lg:mb-6">
        <div>
          <p
            className="text-xl gradient-text-color font-extralight tracking-widest 
          md:text-xl lg:text-3xl"
          >
            EDUCATION
          </p>
        </div>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px] md:text-lg lg:text-2xl max-w-[1300px]">
          <div className="">
            <h1></h1>
            <h2></h2>
            <p></p>
          </div>
          <div className="flex sm:mx-auto lg:mx-0 flex-col gap-4">
            <img src="./match.jpeg" alt="" className="rounded-lg" />
            <p className="text-end">Me coding</p>
          </div>
        </div>
      </div>
    </div>
  );
}
