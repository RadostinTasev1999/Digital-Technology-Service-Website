import ContactCardHeading from './ContactCardHeading'
import ContactCardItem from './ContactCardItem'

import {ContactCardsProps} from '@/lib/definitions'


export default function ContactCards({
    contactCardHeading,
    contactCardsData
}: ContactCardsProps) {

    return(
        <section
            id="cards-section"
            >
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">

                {/* Contact information */}
                <div id="contact-cards" className='mb-15'>
                    {/* Heading and Description */}
                    <ContactCardHeading
                        heading={contactCardHeading.heading}
                        text={contactCardHeading.text}
                            />

                    {/* Contact-cards grid */}
                    <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>

                        {
                            contactCardsData.map((el) => {
                                const UrlIcon = el.urlIcon

                                return (
                                    <ContactCardItem
                                        key={el.id}
                                        label={el.label}
                                        Icon={<el.icon/>}
                                        heading={el.heading}
                                        text={el.text || ""}
                                        url={el.url || ""}
                                        urlText={el.urlText || ""}
                                        UrlIcon={UrlIcon ? <UrlIcon /> : undefined}
                                        listItems={el.listItems}
                                    />
                                )
                            })
                        }
                        
                    </div>
                </div>       
            </div>
        </section>
    )
}
