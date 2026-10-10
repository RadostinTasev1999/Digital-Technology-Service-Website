import ContactsHero from '@/components/contactspage/ContactsHero'
import ContactCards from '@/components/contactspage/ContactsCards'

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
                />
        </>
    )
}