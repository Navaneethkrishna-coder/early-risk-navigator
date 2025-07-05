
import { ArrowRight, Activity, Shield, Users, Brain, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import TryItNow from "@/components/TryItNow";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <HowItWorks />
      <TryItNow />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
