import ContactsHero from '@/components/contactspage/ContactsHero'
import ContactCards from '@/components/contactspage/ContactsCards'
import FormSection from '@/components/contactspage/ContactFormSection'

import { Divider } from 'rsuite'

import { contactForm } from '@/lib/placeholderdata'
import {formInputs} from '@/lib/placeholderdata'
import {contactCardHeading} from '@/lib/placeholderdata'

import {contactsIntroData} from '@/lib/placeholderdata'
import {contactCardsData} from '@/lib/placeholderdata'


export default function BusinessContacts() {

    return(
        <>
            {/* Hero Section */}
            <ContactsHero
                contactsIntroData={contactsIntroData}

                />

                <Divider size="xs" color="#9ac4c6" className="max-w-7xl mx-auto"/>
            {/* Contact Cards Section */}
            <ContactCards
                contactCardHeading={contactCardHeading}
                contactCardsData={contactCardsData}
                />
            
                <Divider size="xs" color='#9ac4c6' className='max-w-7xl mx-auto' />
            {/* Contact Form Section */}
            <FormSection
                formInputs={formInputs}
                contactForm={contactForm}
                />
        </>
    )
}