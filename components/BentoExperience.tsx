import Link from "next/link";

export default function BentoExperience() {
  return (
    <Link
      href={""}
      className="p-5 hover:scale-105 border-[0.1px] rounded-lg border-gray-700 bg-[#2e2e2e] ease-in-out duration-300 bentos-containerExp"
    >
      <p className="text-4xl font-black gradient-text-color">Experience</p>
    </Link>
  );
}
