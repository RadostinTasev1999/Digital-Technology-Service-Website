import ServiceHeading from "../servicepage/ServiceHeading"
import ServiceCta from "../servicepage/ServiceCta"

import { ContactsHeroData } from '@/lib/definitions'

export default function ContactsHero({
    contactsIntroData
}: ContactsHeroData){

    return(
        <section
            id="service-intro"
            className="text-slate-800"
        >
            <div
                id="container"
                className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24"
            >
                <div className="mb-5"></div>
                {/* Hero Heading */}
                <ServiceHeading
                    serviceBadge={contactsIntroData.text.badge}
                    serviceHeading={contactsIntroData.text.heading}
                    serviceDescription={contactsIntroData.text.description}
                />
                {/* Hero CTA */}
                <ServiceCta
                    btnPrimary={contactsIntroData.btnPrimary}
                    btnSecondary={contactsIntroData.btnSecondary}
                />
            </div>
        </section>
    )
}