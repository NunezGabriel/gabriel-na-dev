export default function Aboutme() {
  return (
    <div className="md:px-16 md:py-0 p-6 flex flex-col gap-6">
      <p className="text-4xl font-black gradient-text-color">
        Gabriel Emilio Nunez Arenas
      </p>
      <div className="">
        <div className="grid grid-rows-3 grid-cols-2 gap-3 w-full">
          <img
            src="./mirrorFace.jpeg"
            alt=""
            className="rounded-lg row-span-2 bg-red-500"
          />
          <img
            src="./dogs.jpeg"
            alt=""
            className="rounded-lg row-span-2 row-start-2 col-start-2 bg-purple-600"
          />
        </div>
      </div>
      <div>
        <div>
          <p className="text-xl gradient-text-color font-extralight tracking-widest">
            INFO
          </p>
        </div>
        <div>
          <p>I'm a Software developer </p>
        </div>
      </div>
    </div>
  );
}
