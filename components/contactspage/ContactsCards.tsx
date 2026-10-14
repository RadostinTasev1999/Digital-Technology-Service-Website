import ContactsForm from './ContactsForm'
import ContactCardItem from '@/components/contactspage/ContactCardItem'

import ContactQuickCard from './ContactQuickCard'

import {ContactCardProps} from '@/lib/definitions'

export default function ContactCards({
    contactCards,
    contactForm,
    quickContact,
    formInputs
}: ContactCardProps) {

    return(
        <section
            id="cards-section"
            >
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">

                {/* Row 1 Contact information cards */}
                {/* md:grid-cols-3 -> creates three equal-width columns on mid screens */}
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Contact Cards */}

                    {
                        contactCards.contactCardsData.map((el) => (
                            <ContactCardItem
                                key={el.id}
                                label={el.label}
                                text={el.text}
                                Icon={<el.icon />}
                                />
                        ))
                    }
                </div>
                {/* Row 2: Form and working hours */}
                <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_1fr]">
                    {/* Contact form */}
                    <ContactsForm
                        heading={contactForm.contactFormData.heading}
                        paragraph={contactForm.contactFormData.paragraph}
                        nameInput={formInputs.nameInput}
                        emailInput={formInputs.emailInput}
                        phoneInput={formInputs.phoneInput}
                        serviceInput={formInputs.serviceInput}
                        messageInput={formInputs.messageInput}
                        btnPrimary={contactForm.contactFormData.btnPrimary}
                        />
                    {/* Working hours and quick contact */}
                    <ContactQuickCard
                        headingPrimary={quickContact.headingPrimary}
                        paragraph={quickContact.paragraph}
                        headingSecondary={quickContact.headingSecondary}
                        listItems={quickContact.listItems}
                        />
                </div>
            </div>
        </section>
    )
}