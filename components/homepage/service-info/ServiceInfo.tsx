import SectionHeader from '@/components/homepage/section-header/SectionHeading'
import AppServiceCard from '@/components/homepage/service-info/ServiceCard'
import {AppServiceData} from '@/lib/definitions'

export default function AppServiceInfo({
    label,
    heading,
    description,
    serviceCardData
}: AppServiceData) {

    return (
        <section id="service-section">
            <div 
                id="service-container"
                className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24"
                >
                {/* Section Header */}
                <SectionHeader 
                    label={label}
                    heading={heading}
                    description={description}
                    />
                {/* Service Cards */}
                <div 
                    id="service-card-container"
                    className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {
                            serviceCardData.map((card) => (
                                <AppServiceCard
                                    key={card.id}
                                    BadgeIcon={<card.badgeIcon />}
                                    ArrowIcon={<card.arrowIcon />}
                                    heading={card.heading}
                                    text={card.text}
                                    detailsText={card.detailsText}
                                    />
                            ))
                        }

                </div>
            </div>
        </section>
    )
}