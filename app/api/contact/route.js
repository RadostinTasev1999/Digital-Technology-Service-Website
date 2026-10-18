import 'dotenv/config'
import Mailgun from 'mailgun.js';


export async function POST(request) {


    const {
        name,
        email,
        phone,
        service,
        message
    } = await request.json()

    // Create Payload data to send to email server

    const data = {
        from: `Mailgun Sandbox <postmaster@${process.env.SANDBOX_DOMAIN}>`,
        to: ['Radostin Tasev <tasevdev19@yahoo.com>'],
        subject: 'Ново съобщение от Клиент',
        text: `
        Здравейте Радостин Тасев,

        Туко що получихте ново съобщение от клиент относно сервизна услуга.

            Име: ${name}
            Имейл: ${email}
            Телефон: ${phone}
            Вид услуга: ${service}
            Съобщение: ${message}

        От екип ИТ поддръжка
        `
    }

    // Instantiate the Mailgun class
    const mailgun = new Mailgun(FormData)

    // Create the client instance using the client method
    const mg = mailgun.client({
        username: 'api',
        key: process.env.MAILGUN_API_KEY
    })

    try {
        await mg.messages.create(process.env.SANDBOX_DOMAIN,data)

        return Response.json(
            { message: 'success' },
            { status: 200}
        )
    } catch (error) {
        return Response.json(
            { message: 'error'},
            { status: 500 }
        )
    }

    // return Response.json({ received:true })
}