import AppHero from "@/components/homepage/hero/Hero";
import ServiceProcess from '@/components/homepage/service-process/ServiceProcess'
import { Divider } from "rsuite";

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
          heroCta={heroSectionData.heroCtaButtons}
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
      {/* Divider */}
      <Divider size="xs" color="#9ac4c6" className="mx-auto max-w-7xl" />
      {/* Service Process Section */}
      <ServiceProcess />
      </>
  );
}
