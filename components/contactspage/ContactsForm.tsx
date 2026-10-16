'use client'

import { useActionState } from 'react';
import { sendInquiry } from '@/app/api/action';

import {ContactsFormData} from '@/lib/definitions'

const initialState = {
    success: '',
    errors: {
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    }
};


export default function ContactsForm({
    heading,
    paragraph,
    nameInput,
    emailInput,
    phoneInput,
    serviceInput,
    messageInput,
    btnPrimary
}: ContactsFormData) {

    const [formState, dispatchAction] = useActionState(sendInquiry, initialState);

    // ! -> sendInquiry returns the new state, and triggers a Transition to re-render with that state.


    return(
        <form action={dispatchAction} className='flex flex-col sm:basis-2xl md:basis-3xl lg:basis-4xl'>
            {/* Heading and description */}
            <h2 className="text-2xl font-bold text-slate-900 text-center">
                {heading}
            </h2>
            <p className="mt-2 text-sm text-slate-600 text-center">
                {paragraph}
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
                        {nameInput.label}
                    </label>
                    <input
                        name={nameInput.name}
                        id={nameInput.name}
                        type={nameInput.type}
                        className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2.5 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                        placeholder={nameInput.placeholder}
                    >

                    </input>
                    {
                        formState.errors?.name && (
                            <p className='text-xs text-red-600 mt-2'>
                                {formState.errors.name[0]}
                            </p>
                        )
                    }
                    
                </div>
                
                {/* Email */}
                <div>
                    <label
                        htmlFor='email'
                        className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                    >
                        {emailInput.label}
                    </label>
                    <input
                        name={emailInput.name}
                        id={emailInput.name}
                        type={emailInput.type}
                        className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2.5 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                        placeholder={emailInput.placeholder}
                    >
                        
                    </input>
                    {
                        formState.errors?.email && (
                            <p className='text-xs text-red-600 mt-2'>
                                {formState.errors.email[0]}
                            </p>
                        )
                    }
                </div>
                {/* Phone */}
                <div>
                    <label
                        htmlFor='phone'
                        className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                    >
                       {phoneInput.label}
                    </label>
                    <input
                        name={phoneInput.name}
                        id={phoneInput.name}
                        type={phoneInput.type}
                        
                        className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2.5 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                        placeholder={phoneInput.placeholder}
                    >

                    </input>
                    {
                        formState.errors?.phone && (
                            <p className='text-xs text-red-600 mt-2'>
                                {formState.errors.phone[0]}
                            </p>
                        )
                    }
                </div>
                {/* Service */}
                <div>
                    <label
                        htmlFor='service'
                        className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                    >
                        {serviceInput.label}
                    </label>
                    <select
                        name={serviceInput.name} id={serviceInput.name}
                        className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2.5 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                    
                    >
                        {
                            serviceInput.value?.map((el) => (
                                <option key={el.id} value={`${el.id > 1 ? el.option : ''}`} className='text-slate-300'>
                                    {el.option}
                                </option>

                            ))
                        }
                    </select>
                </div>
                {/* Message */}
                <div className='sm:col-span-2'>
                    {/* Message label and textarea */}
                    <label
                        htmlFor='message'
                        className='mb-1.5 block text-xs font-bold uppercase tracking-wide'
                    >
                       {messageInput.label}
                    </label>
                    <textarea
                        name={messageInput.name}
                        rows={messageInput.rows}
                        className="w-full rounded-lg border border-slate-300 bg-white/70 px-3 py-2.5 text-sm focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
                        placeholder={messageInput.placeholder}
                    >

                    </textarea>
                    {
                        formState.errors?.message && (
                            <p className='text-xs text-red-600 mt-2'>
                                {formState.errors.message[0]}
                            </p>
                        )
                    }
                </div>

            </div>
            {/* Submit button */}
            <button
                type='submit'
                className='mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 text-sm font-bold text-white/90 shadow-sm self-center sm:w-xl md:w-2xl lg:w-3xl'
            >
                {btnPrimary}
            </button>
        </form>
    )
}