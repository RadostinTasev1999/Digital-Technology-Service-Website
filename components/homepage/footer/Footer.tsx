import Link from "next/link"
import Image from "next/image"

export default function AppFooter() {


    return (
        <footer className="absolute bottom-0 left-0 right-0 w-full text-white/80 border border-top border-slate-300 backdrop-blur-3xl"> 
            <div id="container" className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
                {/* Main footer content */}
                <div className="flex flex-col  justify-between md:flex-row">

                    {/* Company information */}
                    <div className="min-w-0">
                        {/* Company Logo */}
                        <Link href='/' className="inline-flex items-center gap-2">
                            <Image 
                                            src="/hardware-detect-svgrepo-com.svg"
                                            width={30}
                                            height={30}
                                            alt="Header logo"
                                        />
                        </Link>
                        {/* Company Description */}
                        <p className="mt-4 max-w-sm text-sm text-slate-800">
                            Телевизионен Сервиз Памтекс 94 ЕООД -
                            Ремонт и Диагностика на ТВ, Аудио и Видео системи.
                        </p>
                    </div>
                    {/* Contact information */}
                    <div className="min-w-0">

                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-green-600">
                            Контакти
                        </h4>

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
                {/* Copyright */}
            <div 
                className="mt-10 border-t border-slate-400 pt-5 text-center text-xs text-slate-800"
            >
                @ 2026 Памтекс 94 ООД. Всички права запазени
            </div>
            </div>
        </footer>
    )

}