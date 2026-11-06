import React from "react";
import { HomeHero } from "@/components/sections/HomeHero";
import { ChallengeSection } from "@/components/sections/ChallengeSection";
import { StagePreview } from "@/components/sections/StagePreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { LeadershipSection } from "@/components/sections/LeadershipSection";
import { InsightsSection } from "@/components/sections/InsightsSection";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { homeData } from "@/data/home";

export default function HomePage() {
  const { closing } = homeData;

  return (
    <div className="flex flex-col">
      <HomeHero />
      <ChallengeSection />
      <StagePreview />
      <ServicesOverview />
      <LeadershipSection />
      <InsightsSection />
      <ClosingBand heading={closing.heading} body={closing.body} />
    </div>
  );
}
