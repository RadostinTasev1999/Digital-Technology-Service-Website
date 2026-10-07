import AppHero from "@/components/homepage/hero/Hero";
import AppServiceInfo from "@/components/homepage/service-info/ServiceInfo";
import { heroSectionData } from '@/lib/placeholderdata'
import { heroStatistics } from '@/lib/placeholderdata'
import { sectionHeadings } from "@/lib/placeholderdata";
import {serviceCardData} from '@/lib/placeholderdata'

export default function Page() {

  const { label, heading, description } = sectionHeadings.serviceSection
  
  return (
    <>
    {/* Hero Section */}
      <AppHero 
          badgeText={heroSectionData.badgeText}
          heroHeading={heroSectionData.heroHeading}
          heroDescription={heroSectionData.heroDescription}
          heroBtn1={heroSectionData.heroBtn1}
          heroBtn2={heroSectionData.heroBtn2}
          heroLogoCard={heroSectionData.heroLogoCard}
          heroServiceCards={heroSectionData.heroServiceCards}
          heroLongCard={heroSectionData.heroLongCard}
          heroStatistics={heroStatistics}
        />
    {/* Business Services Section */}
      <AppServiceInfo 
        label={label}
        heading={heading}
        description={description}
        serviceCardData={serviceCardData}
        />
      </>
  );
}
