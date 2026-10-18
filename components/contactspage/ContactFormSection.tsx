import ContactsForm from "./ContactsForm"
import { FormSectionData } from '@/lib/definitions'

export default function FormSection({
    formInputs,
    contactForm
}: FormSectionData) {

    return(
        <section id="form-section">
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
                <div id="contact-form" className="mt-15 flex justify-center">
                    {/* Contact Form */}
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
                </div>
            </div>
        </section>
    )
}