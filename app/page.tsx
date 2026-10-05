import AppHero from "@/components/homepage/hero/Hero";
import { heroSectionData } from '@/lib/placeholderdata'

export default function Page() {
  
  return (
      <AppHero 
          badgeText={heroSectionData.badgeText}
          heroHeading={heroSectionData.heroHeading}
          heroDescription={heroSectionData.heroDescription}
          heroBtn1={heroSectionData.heroBtn1}
          heroBtn2={heroSectionData.heroBtn2}
          heroLogoCard={heroSectionData.heroLogoCard}
          heroServiceCard={heroSectionData.heroServiceCard}
          heroLongCard={heroSectionData.heroLongCard}
        />
  );
}
