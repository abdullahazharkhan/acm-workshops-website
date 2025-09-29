import Image from "next/image";
import { Button } from '@heroui/button';
import Hero from "@/components/Hero";
import Workshops from "@/components/Workshops";
import Leads from "@/components/Leads";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Workshops />
      <Leads />
    </div>
  );
}
