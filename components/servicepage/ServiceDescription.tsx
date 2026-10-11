import ServiceDescLeft from '@/components/servicepage/ServiceDescLeft'
import ServiceDescRight from '@/components/servicepage/ServiceDescRight'

import {ServiceDescData} from '@/lib/definitions'

export default function ServiceDescription({
    heroServiceDesc
}: ServiceDescData) {

    return(
        <section
                    id="service-info"
                    
                    >
                    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
                        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        
                            {/* Left column */}
                            <ServiceDescLeft 
                                heading={heroServiceDesc.heading}
                                
                                />
        
                            {/* Right column */}
                            <ServiceDescRight 
                                description={heroServiceDesc.description}
                                />
        
                        </div>
        
                    </div>
        
                </section>
    )
}