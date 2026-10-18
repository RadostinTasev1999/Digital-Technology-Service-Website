"use server"
import { z } from 'zod';

// Define the schema
const ContactFormSchema = z.object({
    name: z.string().trim().min(1,{ message: 'Моля въведете име'}).regex(/^[а-яА-Яa-zA-Z0-9\s]*$/gm,{ message: 'Моля въведете валидно име'}),
    email: z.string().min(1, { message: 'Моля въведете имейл'}).email({message: 'Моля въведете валиден имейл'}),
    phone: z.string().trim().min(1,{ message: 'Моля въведете номер'}).min(10,{ message: 'Моля въведете валиден номер' }),
    service: z.enum(['Сервиз и Ремонт','Диагностика']),
    message: z.string().min(1, { message: 'Моля въведете съобщение'}).regex(/^[\p{Script=Cyrillic}\p{Script=Latin}\d\s\p{P}\p{S}]*$/u,{ message: 'Моля въведете валидно съобщение'})
})
// ! extract TypeScript type definition for ContactForm from schema definition
type ContactForm = z.infer<typeof ContactFormSchema>

// z.infer -> utility which extracts static type from schema definition.

type initialState = {
    success: string,
    errors: errorsState
}

type errorsState = {
    name: string,
    email: string,
    message: string
}

/*
    {
    success: '',
    errors: {
        name: '',
        email: '',
        message: ''
    }
};
*/

// sendInquiry is server action
export async function sendInquiry(prevState: initialState, formData: FormData){


    // console.log(formData)
    // ! convert raw formData into regular JavaScript object
       const contactFormData = Object.fromEntries(formData)

       console.log(`FormData object: ${contactFormData}`)

       const validatedContactFormData = ContactFormSchema.safeParse(contactFormData)
       //! safeParse returns an object with a success boolean.
       /*
        ! -> if success: true -> it provides { success:true, data: parsedData }
        ! -> if success: false -> it provides { success: false, error: ZodError }
       */

        if (!validatedContactFormData.success) {

            console.log('THere is an error!')
            const flattened = z.flattenError(validatedContactFormData.error).fieldErrors
            // -> use z.flattenError to retrieve a clean, shallow error object.
            // console.log(flattened.fieldErrors.name?[0])
            

            return {
                errors: {
                    name: flattened?.name,
                    email: flattened?.email,
                    phone: flattened?.phone,
                    service: flattened?.service,
                    message: flattened?.message
                }
            }
            
        }
        // If validation passes:
        const payloadData = JSON.stringify(validatedContactFormData.data);

        // Send POST request to /api/contact
            const response = await fetch('http://localhost:3000/api/contact',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: payloadData
            });

            const result = await response.json();
            console.log('Result is:', result)

            if (response.status === 200) {

                console.log('Response seturns status 200 OK!')
                return {
                    success: result.message
                } 
            } else if (response.status === 500) {
                console.log('Response returns status 500 Internal server error!')
                return {
                    success: result.message
                }
            }
            

        } 
        /*
            ! on success:
            {
                success: true,
                data: {
                    name: 'Радостин',
                    email: 'radostin@gmail.com',
                    phone: '0898622661',
                    service: 'Сервиз и Ремонт',
                    message: 'Това е моето съобщение'
                }
            }
        */
   
    // safeParse -> returns an object indicating success or failure of the validation

/*
! -> if success: false -> it provides { success: false, error: ZodError }

ZodError -> [Error [ZodError]: [
  {
    "origin": "string",
    "code": "too_small",
    "minimum": 1,
    "inclusive": true,
    "path": [
      "name"
    ],
    "message": "Моля въведете име"
  },
  {
    "code": "invalid_value",
    "values": [
      "Сервиз и Ремонт",
      "Диагностика"
    ],
    "path": [
      "service"
    ],
    "message": "Invalid option: expected one of \"Сервиз и Ремонт\"|\"Диагностика\""
  }
]]
*/