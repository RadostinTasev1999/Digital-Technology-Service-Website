import ServiceDetails from '@/components/servicepage/laptops/ServiceDetails'
import LaptopIntro from '@/components/servicepage/laptops/ServiceHero'
import ServiceDescription from '@/components/servicepage/laptops/ServiceDescription'

import ServiceFaq from '@/components/servicepage/laptops/ServiceFaq'

import {laptopIntroData} from '@/lib/placeholderdata'
import { laptopServiceDesc } from '@/lib/placeholderdata'
import { laptopServiceDetailsL } from '@/lib/placeholderdata'
import { laptopServiceDetailsR } from '@/lib/placeholderdata'



export default function LaptopService() {

    return(
        <>
        {/* Intro Section*/}
        <LaptopIntro
            laptopIntroData={laptopIntroData}
            />
        {/* Description Section */}
        <ServiceDescription 
            laptopServiceDesc={laptopServiceDesc}
            />
        {/* Sevice Details Section */}
        <ServiceDetails
            laptopServiceDetailsL={laptopServiceDetailsL}
            laptopServiceDetailsR={laptopServiceDetailsR}
            />
        {/* FAQ Section */}
        <ServiceFaq
            />
        </>
    )
}