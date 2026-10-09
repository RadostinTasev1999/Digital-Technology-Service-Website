import ServiceHero from "@/components/servicepage/ServiceHero"
import ServiceDescription from '@/components/servicepage/ServiceDescription'
import ServiceDetails from "@/components/servicepage/ServiceDetails"
import ServiceFaq from '@/components/servicepage/ServiceFaq'


import {tvIntroData} from '@/lib/placeholderdata'
import { tvServiceDesc } from '@/lib/placeholderdata'
import { tvServiceDetailsL, tvServiceDetailsR} from '@/lib/placeholderdata'
import { tvServiceFaqHeading } from '@/lib/placeholderdata'
import {tvFaqList} from '@/lib/placeholderdata'

export default function TelevisionService() {

    return(
        <>
        {/* Intro Section */}
        <ServiceHero
            heroData={tvIntroData}
            />

        {/* Description Section */}

        <ServiceDescription
            heroServiceDesc={tvServiceDesc}
            />

        {/* ServiceDetails */}

        <ServiceDetails
            serviceDetailsL={tvServiceDetailsL}
            serviceDetailsR={tvServiceDetailsR}
            />

        {/* ServiceFaq */}
        <ServiceFaq
            label={tvServiceFaqHeading.label}
            heading={tvServiceFaqHeading.heading}
            serviceFaqList={tvFaqList}
            />
        </>
    )
}