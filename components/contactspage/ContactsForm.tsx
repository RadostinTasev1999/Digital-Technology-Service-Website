'use client'

import { useActionState, useReducer } from "react"
import { createUserAction } from '@/actions/index'

const errorReducer = (state, action) => {

    switch (action.type) {
        case 'value':
            
            break;
    
        default:
            break;
    }
}

const inputsReducer = (state, action) => {

    /*
        {
                type: 'UPDATE_INPUT',
                name: e.target.name,
                value: e.target.value

            }
    */

    switch (action.type) {

        case 'UPDATE_INPUT':
            
        return {
            ...state,
            [action.name]: action.value
        }
            
    
        default:
            break;
    }
}



export default function ContactsForm() {

    /*
        type ActionState = {
            data?: ContactInput,
            errors?: ContactErrors,
            success?: boolean
        }
        
        formState initial state is of type ActionState
    */
    const [formState, formAction] = useActionState(createUserAction, {});
    const [inputError, dispatchInputError] = useReducer(errorReducer, {nameError: '', emailError: '', phoneError: '', serviceError: '', messageError: ''})
    const [inputs, dispatchInputs] = useReducer(inputsReducer, {name: '', email: '', phone: '', service: '', message: ''})

    const handleChange = (e) => {

        dispatchInputs(
            {
                type: 'UPDATE_INPUT',
                name: e.target.name,
                value: e.target.value

            }
        )
    }

    return(
        <form action={formAction} className='rounded-2xl border border-slate-400 p-6 shadow-sm md:p-8 backdrop-blur-md bg-white/30'>
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
                        onChange={handleChange}
                        defaultValue={inputs.name}
                        placeholder="Въведете име"
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
                        placeholder="Въведете имейл"
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
                        placeholder="Въведете телефон"
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
                        <option value="" className='text-slate-300'>Изберете услуга</option>
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
                        placeholder="Въведете съобщение"
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
    )
}