import ServiceHero from "@/components/servicepage/ServiceHero"
import ServiceDescription from "@/components/servicepage/ServiceDescription"
import ServiceDetails from "@/components/servicepage/ServiceDetails"
import ServiceFaq from '@/components/servicepage/ServiceFaq'
import { Divider } from "rsuite"

// static assets
import { monitorData } from "@/lib/placeholderdata"
import { monitorDescData } from '@/lib/placeholderdata'
import { serviceDetailsData } from '@/lib/placeholderdata'
import { serviceDetailsFaq } from '@/lib/placeholderdata'

export default function MonitorService() {

    return(
        <>
            {/* Intro Section */}
            <ServiceHero
                heroData={monitorData}
                />
            
            <Divider size="xs" color="#9ac4c6" />

            {/* ServiceDescription */}
            <ServiceDescription 
                    heroServiceDesc={monitorDescData}
                    />
        
            <Divider size="xs" color="#9ac4c6" />

            {/* Service Details */}
            <ServiceDetails
                    serviceDetailsL={serviceDetailsData.serviceDetailsL}
                    serviceDetailsR={serviceDetailsData.serviceDetailsR}
                    />

            <Divider size="xs" color="#9ac4c6" />
            {/* FAQ Section */}
            <ServiceFaq
                label={serviceDetailsFaq.label}
                heading={serviceDetailsFaq.heading}
                serviceFaqList={serviceDetailsFaq.serviceFaqList}
                />
        </>
    )
}