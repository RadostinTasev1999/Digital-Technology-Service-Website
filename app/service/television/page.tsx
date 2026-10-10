import ServiceHero from "@/components/servicepage/ServiceHero"
import ServiceDescription from '@/components/servicepage/ServiceDescription'
import ServiceDetails from "@/components/servicepage/ServiceDetails"
import ServiceFaq from '@/components/servicepage/ServiceFaq'

import { Divider } from 'rsuite'

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

        <Divider size="sm" color="#9ac4c6"/>

        {/* Description Section */}

        <ServiceDescription
            heroServiceDesc={tvServiceDesc}
            />

        <Divider size="sm" color="#9ac4c6"/>

        {/* ServiceDetails */}

        <ServiceDetails
            serviceDetailsL={tvServiceDetailsL}
            serviceDetailsR={tvServiceDetailsR}
            />

        <Divider size="sm" color="#9ac4c6"/>

        {/* ServiceFaq */}
        <ServiceFaq
            label={tvServiceFaqHeading.label}
            heading={tvServiceFaqHeading.heading}
            serviceFaqList={tvFaqList}
            />
        </>
    )
}