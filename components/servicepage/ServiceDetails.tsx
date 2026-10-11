import ServiceDetailsLeft from '@/components/servicepage/ServiceDetailsLeft'
import ServiceDetailsRight from '@/components/servicepage/ServiceDetailsRight'
import {ServiceDetailsData} from '@/lib/definitions'

export default function ServiceDetails({
    serviceDetailsL,
    serviceDetailsR
}: ServiceDetailsData) {

    return(
        <section
            id="service-details"
            
        >
            <div
                id="main-container"
                className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Left column */}
                    <ServiceDetailsLeft
                       serviceDetailsL={serviceDetailsL}
                       />

                    {/* Right column */}
                    <ServiceDetailsRight
                       serviceDetailsR={serviceDetailsR}
                       />
                </div>
            </div>
        </section>
    )
}