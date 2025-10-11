import Hero from "@/components/Hero";
import Workshops from "@/components/Workshops";
import Leads from "@/components/Leads";
import Mentors from "@/components/Mentors";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <Workshops />
      <Leads />
      <Mentors />
    </div>
  );
}
