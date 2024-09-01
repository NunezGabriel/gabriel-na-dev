"use client";
import Aboutme from "@/components/about-me-components/AboutMe";
import InfoContainer from "@/components/about-me-components/InfoContainer";
import NavbarComponent from "@/components/about-me-components/NavbarComponent";
export default function MainAboutMeComponent() {
  return (
    <div className="mx-auto max-w-[1800px]">
      <NavbarComponent />
      <InfoContainer />
      <Aboutme />
    </div>
  );
}
