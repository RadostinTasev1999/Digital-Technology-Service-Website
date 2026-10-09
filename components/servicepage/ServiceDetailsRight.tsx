import UserGroup from "@/components/ui/UserGroup"


import { LaptopServiceDetailsR } from '@/lib/definitions'
import ServiceDetailsRItem from '@/components/servicepage/ServiceDetailsRItem'

export default function ServiceDetailsRight({
    serviceDetailsR
}: LaptopServiceDetailsR) {

    return(
        <div className="min-w-0">
            {/* Heading */}
            <div className="flex items-center gap-[0.75rem] mb-[1.5rem]">
                <span className="inline-flex w-[2.75rem] h-[2.75rem] items-center justify-center rounded-[0.75rem] shrink-0 border-2 text-green-600 backdrop-blur-sm">
                    {/* Users icon / svg */}
                    <UserGroup
                        size="size-8"
                    />
                </span>

                <h2 className="m-0 text-[1.5rem] leading-[2rem] font-black">
                    {serviceDetailsR.heading}
                </h2>
            </div>

            {/* Audience list */}

            <ul className="m-0 p-0 list-none flex flex-col gap-[0.625rem]">

                {
                    serviceDetailsR.listItems.map((item) => (
                        <ServiceDetailsRItem
                            key={item.id}
                            text={item.text}
                            />
                    ))
                }
                
                



            </ul>
        </div>
    )
}