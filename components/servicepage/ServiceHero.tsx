
import ServiceMiniNav from './ServiceMiniNav'
import ServiceHeading from './ServiceHeading'
import ServiceCta from './ServiceCta'

import {ServiceHeroData} from '@/lib/definitions'

export default function ServiceHero({
    heroData
}: ServiceHeroData) {
    return(
        <section
                    id="service-intro"
                    className="text-slate-800"
                    >
                        <div 
                            id="container"
                            className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24"
                            >
                                {/* mini navigation */}
                            
                            <ServiceMiniNav
                                navLinks={heroData.navLinks}
                                navText={heroData.navText}
                                />

                                {/* Hero Heading */}
                            <ServiceHeading
                                serviceBadge={heroData.text.badge}
                                serviceHeading={heroData.text.heading}
                                serviceDescription={heroData.text.description}
                                    />
                                {/* Hero CTA */}
                                <ServiceCta
                                    btnPrimary={heroData.btnPrimary}
                                    btnSecondary={heroData.btnSecondary}
                                    />
                        </div>
                </section>
    )
}