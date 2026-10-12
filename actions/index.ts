"use server"
// We define this file as a server action with the "use server" directive at the top of the file
import { ContactInput, ContactErrors, contactSchema } from '@/schema/index'
import { z } from "zod";

type ActionState = {
    data?: ContactInput,
    errors?: ContactErrors,
    success?: boolean
}

export async function createUserAction(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState>{

    /*
        FormData {
            '$ACTION_REF_1': '',
            '$ACTION_1:0': '{"id":"601fdc3c7167c3da097e4a4f783d855e43cc148109","bound":"$@1"}',
            '$ACTION_1:1': '[{}]',
            '$ACTION_KEY': 'k17ac2cf0da790688200737bda5a4e61d',
            name: 'Радостин',
            email: 'tasev@gmail.com',
            phone: '0898622661',
            service: 'Диагностика',
            message: 'Това е моето съобщение'
        }
    */

    // FormData.entries() - returns an iterator which iterates through all key/value pairs contained in the FormData
    //                    - 
    const data = Object.fromEntries(formData.entries());
    console.log(data)
    /*
        {
            name: 'Радостин',
            email: 'tasev@gmail.com',
            phone: '0899341212',
            service: 'Диагностика',
            message: 'Това е моето съобщение'
        }
    */

    const validatedData = contactSchema.safeParse(data); // validates the incoming data at runtime.

    /*
    
     contactSchema = {
            name: z.string(),
            email: z.string().email(),
            phone: z.number().positive(),
            service: z.enum(['Сервиз и Ремонт','Диагностика']),
            message: z.string()
    }


    */

    if (!validatedData.success) {
        const errors = z.flattenError(validatedData.error).fieldErrors;

        return {
            errors,
            data: data as ContactInput
        }
    }

    // Here we can perform actions such as saving to a DB or sending a request to an API

    return {
        success: true
    }

}