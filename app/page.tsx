"use client";
import InfoContainer from "@/components/InfoContainer";
import NavbarComponent from "@/components/NavbarComponent";
import { useState } from "react";

export default function Home() {
  // const [theme, setTheme] = useState(false);
  return (
    <div className="mx-auto max-w-[1350px]">
      <NavbarComponent />
      <InfoContainer />
    </div>
  );
}
