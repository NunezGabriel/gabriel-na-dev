import BentoAboutMe from "@/components/BentoAboutMe";
import BentoArticles from "@/components/BentoArticles";
import BentoCraft from "@/components/BentoCraft";
import BentoExperience from "@/components/BentoExperience";
import BentoPersonalPro from "@/components/BentoPersonalPro";
import BentoSkills from "@/components/BentoSkills";

export default function Home() {
  return (
    <div className="max-w-[2400px] w-full h-[100vh] grid gap-6 grid-cols-4 grid-rows-2 p-9">
      <BentoAboutMe />
      <BentoExperience />
      <BentoSkills />
      <BentoCraft />
      <BentoArticles />
      <BentoPersonalPro />
    </div>
  );
}
