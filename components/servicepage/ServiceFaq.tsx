import ServiceFaqIcon from '@/components/servicepage/ServiceFaqIcon'
import ServiceFaqHeading from '@/components/servicepage/ServiceFaqHeading'
import ServiceFaqItem from '@/components/servicepage/ServiceFaqItem'

import {ServiceFaqData} from '@/lib/definitions'


export default function ServiceFaq({
    label,
    heading,
    serviceFaqList
}: ServiceFaqData) {

    return(
        <section
            id="faq-section"
            >
            <div className="m-auto max-w-7xl px-4 py-16 border-t-2 border-slate-300 lg:px-8 lg:py-24">
                {/* Two column layout */}
                <div className="grid gap-10 md:grid-cols-[1fr_1.6fr] md:items-start">
                    {/* Left column */}
                    <div>
                        <div className="mb-3 flex items-center gap-3">
                            {/* Question mark icon container */}
                            <ServiceFaqIcon />
                            {/* Questions + Heading */}
                            <ServiceFaqHeading
                                label={label}
                                heading={heading}
                                />

                        </div>
                    </div>

                    {/* Right column */}

                    <div className="space-y-3">
                        {/* FAQ ITEM */}
                        {
                            serviceFaqList.map((el) => (
                                <ServiceFaqItem
                                    key={el.id}
                                    question={el.question}
                                    answer={el.answer}
                                    />
                            ))
                        }
                        

                    </div>
                </div>
            </div>
        </section>
    )
}