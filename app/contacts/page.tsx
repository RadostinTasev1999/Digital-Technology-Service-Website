import ContactsHero from '@/components/contactspage/ContactsHero'
import ContactCards from '@/components/contactspage/ContactsCards'

import { Divider } from 'rsuite'

import { contactCards } from '@/lib/placeholderdata'
import { contactForm } from '@/lib/placeholderdata'
import { quickContact } from '@/lib/placeholderdata'
import {formInputs} from '@/lib/placeholderdata'

import {contactsIntroData} from '@/lib/placeholderdata'


export default function BusinessContacts() {

    return(
        <>
            {/* Hero Section */}
            <ContactsHero
                contactsIntroData={contactsIntroData}

                />

                {/* Divider */}

                <Divider size="xs" color="#9ac4c6" className="max-w-7xl mx-auto"/>
            {/* Contact Cards Section */}
            <ContactCards
                contactCards={contactCards}
                contactForm={contactForm}
                quickContact={quickContact}
                formInputs={formInputs}
                />
        </>
    )
}