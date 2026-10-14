import ContactsHero from '@/components/contactspage/ContactsHero'
import ContactCards from '@/components/contactspage/ContactsCards'

import { contactCards } from '@/lib/placeholderdata'
import { contactForm } from '@/lib/placeholderdata'
import { quickContact } from '@/lib/placeholderdata'
import {formInputs} from '@/lib/placeholderdata'

import { Divider } from 'rsuite'

import {contactsIntroData} from '@/lib/placeholderdata'


export default function BusinessContacts() {

    return(
        <>
            {/* Hero Section */}
            <ContactsHero
                contactsIntroData={contactsIntroData}

                />
            {/* Divider */}
            <Divider size="sm" color="#9ac4c6"/>
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