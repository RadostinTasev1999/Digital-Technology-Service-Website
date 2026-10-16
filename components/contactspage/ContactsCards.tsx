import ContactsForm from './ContactsForm'
import Link from 'next/link'

import { Divider } from 'rsuite'

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

                {/* Contact information */}
                <div id="contact-cards" className='mb-15'>
                    {/* Heading and Description */}
                    <div className='max-w-2xl'>
                        <h2 className='font-bold text-green-700 text-md uppercase tracking-[0.10em]'>
                            Как да ни намериш
                        </h2>
                        <p className='mt-4 text-base leading-relaxed text-slate-600 sm:text-lg'>
                            Отбийте се с устройството или ни изпратете запитване предварително -
                            отговаряме в рамките до 2 работни дни
                        </p>
                    </div>

                    {/* Contact-cards grid */}
                    <div className='mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4'>

                        {/* Address card */}
                        <div className='p-6 border rounded-2xl border-slate-300 backdrop-blur-md bg-white/30'>
                            <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                                className="shrink-0 text-green-700"
                            >
                                <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11ZM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                            </svg>

                            <h3 className='mt-4 text-sm font-semibold'>
                                Адрес
                            </h3>

                            <p className='mt-1.5 text-sm'>
                                гр.София пл. Преображение, кв. Захарна фабрика
                            </p>

                            {/* Google Maps Card Link */}
                            <Link href="https://maps.app.goo.gl/RX4h3NBxSYgQN8xy8" className='mt-1.5 inline-flex gap-2 text-blue-700'>
                                Виж на картата
                                <svg
                                    width="13px"
                                    height="13px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="1.75"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    aria-hidden="true"
                                    className="shrink-0 "
                                >
                                    <path d="M7 17 17 7M8 7h9v9"></path>
                                </svg>
                            </Link>
                        </div>

                        {/* Telephone card */}
                        <div className='p-6 border rounded-2xl border-slate-300 backdrop-blur-md bg-white/30'>
                            <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                                className="shrink-0 text-green-700"
                            >
                                <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 5 5L15 12l5 2v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 3Z"></path>
                            </svg>

                            <h3 className='mt-4 text-sm font-semibold'>
                                Телефон
                            </h3>

                            <Link href='tel:0897818149'>
                                0897818149
                            </Link>
                        </div>

                        {/* Email card */}
                        <div className='p-6 border rounded-2xl border-slate-300 backdrop-blur-md bg-white/30'>
                            <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                                className="shrink-0 text-green-700"
                            >
                                <path d="M3 6h18v12H3zM3 7l9 6 9-6"></path>
                            </svg>

                            <h3 className='mt-4 text-sm font-semibold'>
                                Имейл
                            </h3>

                            <Link href='mailto:pamteks94.bg'>
                                pamteks94.bg
                            </Link>
                        </div>

                        {/* Working hours card */}
                        <div className='p-6 border rounded-2xl border-slate-300 backdrop-blur-md bg-white/30'>
                            <svg
                                width="22px"
                                height="22px"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.75"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                aria-hidden="true"
                                className="shrink-0 text-green-700"
                            >
                                <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3.5 2"></path>
                            </svg>

                            <h3 className='mt-4 text-sm font-semibold'>
                                Работно време
                            </h3>

                            <ul className='mt-1.5 space-y-0.5 text-sm'>
                                <li>Понеделник – Петък: 10:00 – 19:00</li>
                                <li>Събота: 10:00 – 14:00</li>
                                <li>Неделя: почивен ден</li>
                            </ul>

                            <p className='mt-3 text-xs leading-relaxed text-slate-600'>
                                Поръчки по телефон - В рамките на работният ден
                                Онлайн заявки - по всяко време.
                            </p>
                        </div>

                    </div>
                </div>
                <Divider size='xs' color='#9ac4c6' />
                {/* Form and working hours */}
                <div id='contact-form' className="mt-15 flex justify-center">
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
                    {/* <ContactQuickCard
                        headingPrimary={quickContact.headingPrimary}
                        paragraph={quickContact.paragraph}
                        headingSecondary={quickContact.headingSecondary}
                        listItems={quickContact.listItems}
                        /> */}
                </div>
            </div>
        </section>
    )
}

/*
    <div id='contact-cards' className="grid gap-5 border-y border-slate-200 py-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
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
*/