import Image from "next/image";
import { Button } from '@heroui/button';
import Hero from "@/components/Hero";
import Workshops from "@/components/Workshops";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Workshops />
    </div>
  );
}
