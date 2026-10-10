import ServiceDetails from '@/components/servicepage/ServiceDetails'
import ServiceHero from '@/components/servicepage/ServiceHero'
import ServiceDescription from '@/components/servicepage/ServiceDescription'

import { Divider } from 'rsuite'

import ServiceFaq from '@/components/servicepage/ServiceFaq'

import {laptopIntroData} from '@/lib/placeholderdata'
import { laptopServiceDesc } from '@/lib/placeholderdata'
import { laptopServiceDetailsL } from '@/lib/placeholderdata'
import { laptopServiceDetailsR } from '@/lib/placeholderdata'
import { laptopServiceFaqHeading } from '@/lib/placeholderdata'
import { laptopFaqList } from '@/lib/placeholderdata'



export default function LaptopService() {

    return(
        <>
        {/* Intro Section*/}
        <ServiceHero
            heroData={laptopIntroData}
            />

        <Divider size="sm" color="#9ac4c6"/>
        {/* Description Section */}
        <ServiceDescription 
            heroServiceDesc={laptopServiceDesc}
            />

        <Divider size="sm" color="#9ac4c6"/>
        {/* Sevice Details Section */}
        <ServiceDetails
            serviceDetailsL={laptopServiceDetailsL}
            serviceDetailsR={laptopServiceDetailsR}
            />

        <Divider size="sm" color="#9ac4c6"/>
        {/* FAQ Section */}
        <ServiceFaq
           label={laptopServiceFaqHeading.label}
           heading={laptopServiceFaqHeading.heading}
           serviceFaqList={laptopFaqList}
            />
        </>
    )
}