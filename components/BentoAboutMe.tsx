import Link from "next/link";

export default function BentoAboutMe() {
  return (
    <Link
      href={"/about-me"}
      className="p-5 bentos-container hover:scale-105 border-[0.1px] rounded-lg border-gray-700 bg-[#2e2e2e] col-span-2 ease-in-out duration-300"
    >
      <p className="text-4xl font-black gradient-text-color">
        About Me - Contact
      </p>
    </Link>
  );
}
