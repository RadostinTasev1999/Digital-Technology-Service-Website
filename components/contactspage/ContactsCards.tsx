import PhoneIcon from '@/components/ui/PhoneIcon'
import MailIcon from '@/components/ui/MailIcon'
import MapPinIcon from '@/components/ui/MapPinIcon'

import Link from 'next/link'

export default function ContactCards() {

    return(
        <section
            id="cards-section"
            >

            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">

                {/* Row 1 Contact information cards */}
                {/* md:grid-cols-3 -> creates three equal-width columns on mid screens */}
                <div className="grid gap-8 md:grid-cols-3">
                    {/* Phone card */}
                    <div className="rounded-2xl border border-slate-300 p-6 shadow-md backdrop-blur-md bg-white/30">
                        {/* Icon Container */}
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-green-800 text-green-800 bg-slate-100">
                            {/* SVG icon */}
                            <PhoneIcon
                                size='size-5'
                                />
                        </span>
                        {/* Card Label */}
                        <div className='mt-4 text-xs font-bold uppercase tracking-wide'>
                            Телефон
                        </div>
                        {/* Contact information */}
                        <Link href='/' className='mt-1 block text-md font-bold text-green-900'>
                            0897818149
                        </Link>
                    </div>
                    {/* Email card */}
                    <div className="rounded-2xl border border-slate-300 p-6 shadow-md backdrop-blur-md bg-white/30">
                        {/* Icon Container */}
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-green-800 text-green-800 bg-slate-100">
                            {/* SVG icon */}
                            <MailIcon
                                size='size-5'
                                />
                        </span>
                        {/* Card Label */}
                        <div className='mt-4 text-xs font-bold uppercase tracking-wide'>
                            Имейл
                        </div>
                        {/* Contact information */}
                        <Link href='/' className='mt-1 block text-md font-bold text-green-900'>
                            pamteks94@gmail.com
                        </Link>
                    </div>
                    {/* Address card */}
                    <div className="rounded-2xl border border-slate-300 p-6 shadow-md backdrop-blur-md bg-white/30">
                        {/* Icon Container */}
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-green-800 text-green-800 bg-slate-100">
                            {/* SVG icon */}
                            <MapPinIcon
                                size='size-5'
                                />
                        </span>
                        {/* Card Label */}
                        <div className='mt-4 text-xs font-bold uppercase tracking-wide'>
                            Адрес
                        </div>
                        {/* Contact information */}
                        <Link href='/' className='mt-1 block text-md font-bold text-green-900'>
                            гр.София пл. Преображение, кв. Захарна фабрика
                        </Link>
                    </div>
                </div>
                {/* Row 2: Form and working hours */}
                <div className="mt-12 grid gap-8 md:grid-cols-[1.1fr_1fr]">
                    {/* Contact form */}
                    <form className='rounded-2xl border border-slate-400 p-6 shadow-sm md:p-8 backdrop-blur-md bg-white/30'>
                        {/* Heading and description */}
                        <h2 className='text-2xl font-black'>
                            Изпратете запитване
                        </h2>
                        <p className='mt-1 text-sm'>
                            Попълнете формата и ще се свържем с вас в кратък срок
                        </p>
                        {/* Hidden anti-spam field */}
                        
                        <div className='mt-6 grid gap-4 md:grid-cols-2'>
                            {/* Name */}
                            <div>
                                {/* Name input */}
                                <label 
                                    htmlFor='name'
                                    className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                                    >
                                    Име *
                                </label>
                                <input
                                    name='name'
                                    id='name'
                                    type='text'
                                    required
                                    className='w-full rounded-lg border border-slate-400 px-3 py-2.5 text-sm'
                                    >
                                
                                </input>
                                {/* Email input */}
                            </div>
                            <div>
                                <label 
                                    htmlFor='email'
                                    className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                                    >
                                    Имейл *
                                </label>
                                <input
                                    name='email'
                                    id='email'
                                    type='email'
                                    required
                                    className='w-full rounded-lg border border-slate-400 px-3 py-2.5 text-sm'
                                    >
                                
                                </input>
                            </div>
                            <div>
                                <label 
                                    htmlFor='phone'
                                    className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                                    >
                                    Телефон *
                                </label>
                                <input
                                    name='phone'
                                    id='phone'
                                    type='text'
                                    required
                                    className='w-full rounded-lg border border-slate-400 px-3 py-2.5 text-sm'
                                    >
                                
                                </input>
                            </div>
                            <div>
                                <label 
                                    htmlFor='service'
                                    className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                                    >
                                    Услуга *
                                </label>
                                <select
                                    name='service' id='service-select'
                                    className='w-full rounded-lg border border-slate-400 px-3 py-2.5 text-sm'
                                    >
                                    <option value="" className='text-slate-300'></option>
                                    <option value="Сервиз и Ремонт">Сервиз и Ремонт</option>
                                    <option value="Диагностика">Диагностика</option>
                                </select>
                            </div>
                            <div className='sm:col-span-2'>
                                {/* Message label and textarea */}
                                <label 
                                    htmlFor='message'
                                    className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                                    >
                                    Съобщение *
                                </label>
                                <textarea
                                    name='message'
                                    rows={5}
                                    className='w-full rounded-lg border border-slate-400 px-3 py-2.5 text-sm'
                                    >

                                </textarea>
                            </div>
                            
                        </div>
                        {/* Submit button */}
                        <button
                            type='submit'
                            className='mt-6 inline-flex items-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white/90 shadow-sm'
                            >
                            Изпрати запитване
                        </button>
                    </form>
                    {/* Working hours and quick contact */}
                    <div className='p-6 rounded-2xl border border-slate-400 shadow-sm md:p-8 backdrop-blur-md bg-white/30'>
                        <h3 className='text-xl font-black'>
                            Работно Време
                        </h3>
                        <p className='mt-2 text-slate-600 text-sm'>
                            Пoнеделник - Петък 09:00 - 18:00
                        </p>

                        <h3 className='mt-6 text-xl font-black'>Контакти</h3>

                        <div className='mt-3'>
                            {/* Phone link */}
                            {/* Email link */}
                            {/* Address link */}
                            <ul className="space-y-3 text-sm">
                            {/* Address */}
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-green-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                                <span className="text-slate-800">
                                    гр.София пл. Преображение, кв. Захарна фабрика
                                </span>
                            </li>
                            {/* Phone */}
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-green-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>


                                <span className="text-slate-800">
                                    0897818149
                                </span>
                            </li>
                            {/* Email */}
                            <li className="flex gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-green-600">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                <span className="text-slate-800">
                                    pamteks94@gmail.com
                                </span>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}