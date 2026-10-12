import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().regex(/^[а-яА-Я0-9 ]+$/,'Моля въведете валидно име'),
    email: z.string().email().toLowerCase().tr,
    phone: z.number().positive(),
    service: z.enum(['Сервиз и Ремонт','Диагностика']),
    message: z.string()
})
// 
export type ContactInput = z.infer<typeof contactSchema> // automatically generate a TypeScript type  from the schema
// => { name: string, email: string, phone: string, service: string, message: string }

export type ContactErrors = z.core.$ZodFlattenedError<ContactInput>["fieldErrors"]