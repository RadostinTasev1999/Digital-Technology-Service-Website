import CheckBadge from "@/components/ui/CheckBadge"

import ServiceDetailsLItem from '@/components/servicepage/ServiceDetailsLItem'
import {ServiceDetailsL} from '@/lib/definitions'

export default function ServiceDetailsLeft({
    serviceDetailsL
}: ServiceDetailsL) {

    return(
        <div className="min-w-0">
            {/* Heading */}
            <div className="flex items-center gap-[0.75rem] mb-[1.5rem]">
                <span className="inline-flex w-[2.75rem] h-[2.75rem] items-center justify-center rounded-[0.75rem] border-2 shrink-0 text-green-600 backdrop-blur-sm">
                    {/* List/checks icon svg */}
                    <CheckBadge
                        size="size-8"
                    />
                </span>
                <h2 className="m-0 text-[1.5rem] leading-[2rem] font-black">
                    {serviceDetailsL.heading}
                </h2>
            </div>

            {/* Services List */}

            <ul className="m-0 p-0 list-none flex flex-col gap-[0.625rem]">
                
                {
                    serviceDetailsL.listItems.map((item) => (
                        <ServiceDetailsLItem
                            key={item.id}
                            text={item.text}
                            />
                    ))
                }
                
                

            </ul>
        </div>
    )
}