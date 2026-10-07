import ArrowIcon from "@/components/ui/ArrowIcon"
import PhoneIcon from '@/components/ui/PhoneIcon'
import ChevronRight from "@/components/ui/ChevronRight"
import CheckBadge from '@/components/ui/CheckBadge'
import UserGroup from '@/components/ui/UserGroup'
import CheckCircle from '@/components/ui/CheckCircle'
import Link from "next/link"

export default function LaptopService() {

    return(
        <>
        {/* Intro Section*/}
        <section
            id="service-intro"
            className="text-slate-800"
            >
                <div 
                    id="container"
                    className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-24"
                    >
                    <nav
                        className="mb-5 flex items-center gap-1.5 text-xs"
                        >
                        <Link href="" className="hover:text-green-700">Начало</Link>
                        <ChevronRight 
                            size="size-3"
                            />
                        <Link href='' className="hover:text-green-700">Услуги</Link>
                        <ChevronRight 
                            size="size-3"
                            />
                        <Link href="" className="hover:text-green-700">Ремонт на лаптопи</Link>
                    </nav>

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border-2 border-green-700 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">Услуга</div>

                    <h1 className="max-w-4xl text-balance text-4xl font-black leading-tight md:text-5xl lg:text-6xl">Ремонт на лаптопи</h1>

                    <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600">
                        Памтекс 94 ООД извършва ремонт и диагностика на лаптопи за частни клиенти и малки бизнеси в София.
                        Работим върху хардуерни проблеми - батерия, охлаждане, дисплей, клавиатура.
                        Преди извършване на ремонт, правим диагностика и информираме в детайли вариантите за ремонт.
                    </p>

                    <div id="cta-buttons" className="mt-8 flex flex-wrap gap-3">
                        <Link href='/' className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm text-white/90 font-bold shadow-md bg-green-600">
                            Направи запитване
                            <ArrowIcon 
                                size="size-5"
                                />
                        </Link>
                        <Link href='/' className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white/90 shadow-md bg-green-800">
                            
                            <PhoneIcon
                                size="size-4"
                                />
                            0897818149
                        </Link>
                    </div>
                </div>
        </section>
        {/* Description Section */}
        <section
            id="service-info"
            >
            <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24 border-t-2 border-slate-300">
                <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">

                    {/* Left column */}
                    <div className="max-w-3xl mb-10">
                        {/* Category Heading */}
                        <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
                            Какво представлява услугата
                        </div>
                        <h2 className="text-balance text-3xl font-black md:text-4xl">
                            Кога да изберете тази услуга
                        </h2>
                        
                    </div>

                    {/* Right column */}
                    <div className="max-w-3xl ">
                        <p className="text-base leading-relaxed md:text-lg">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ducimus reiciendis non voluptates nisi quod distinctio nobis nesciunt? Harum, odit veritatis qui excepturi nostrum rerum obcaecati ipsam quisquam recusandae explicabo.
                        </p>
                    </div>

                </div>

            </div>

        </section>
        {/* Sevice Details Section */}
        <section
            id="service-details"
            >
            <div 
                id="main-container"
                className="mx-auto max-w-7xl px-4 py-16 border-t-2 border-slate-300 lg:px-8 lg:py-24">
                    <div className="grid gap-10 lg:grid-cols-2">

                        {/* Left column */}
                        <div className="min-w-0">
                            {/* Heading */}
                            <div className="flex items-center gap-[0.75rem] mb-[1.5rem]">
                                <span className="inline-flex w-[2.75rem] h-[2.75rem] items-center justify-center rounded-[0.75rem] border-2 shrink-0 text-green-600 backdrop-blur-sm">
                                    {/* List/checks icon svg */}
                                    <CheckBadge
                                        size="size-8"
                                        />
                                </span>
                                <h2 className="m-0 text-[1.5rem] leading-[2rem] font-black">Какво включва услугата</h2>
                            </div>

                            {/* Services List */}

                            <ul className="m-0 p-0 list-none flex flex-col gap-[0.625rem]">
                                <li className="flex items-start gap-[0.75rem] border border-slate-300 rounded-[0.75rem] p-[0.875rem] shadow-sm bg-blue-50">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* Checkmark svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    {/* Text */}
                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Диагностика на хардуерни проблеми
                                    </span>
                                </li>
                                <li className="flex items-start gap-[0.75rem] border border-slate-300 rounded-[0.75rem] p-[0.875rem] shadow-sm bg-blue-50">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* Checkmark svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    {/* Text */}
                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Диагностика на хардуерни проблеми
                                    </span>
                                </li>
                                <li className="flex items-start gap-[0.75rem] border border-slate-300 rounded-[0.75rem] p-[0.875rem] shadow-sm bg-blue-50">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* Checkmark svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    {/* Text */}
                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Диагностика на хардуерни проблеми
                                    </span>
                                </li>
                                <li className="flex items-start gap-[0.75rem] border border-slate-300 rounded-[0.75rem] p-[0.875rem] shadow-sm bg-blue-50">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* Checkmark svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    {/* Text */}
                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Диагностика на хардуерни проблеми
                                    </span>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Right column */}
                        <div className="min-w-0">
                            {/* Heading */}
                            <div className="flex items-center gap-[0.75rem] mb-[1.5rem]">
                                <span className="inline-flex w-[2.75rem] h-[2.75rem] items-center justify-center rounded-[0.75rem] shrink-0 border-2 text-green-600 backdrop-blur-sm">
                                    {/* Users icon / svg */}
                                    <UserGroup
                                        size="size-8"
                                        />
                                </span>

                                <h2 className="m-0 text-[1.5rem] leading-[2rem] font-black">За кого е подходящо</h2>
                            </div>

                            {/* Audience list */}

                            <ul className="m-0 p-0 list-none flex flex-col gap-[0.625rem]">

                                <li className="flex items-start gap-[0.75rem] border border-slate-300 bg-blue-50 rounded-[0.75rem] p-[0.875rem] shadow-sm">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Частни клиенти с домашен или работен лаптоп
                                    </span> 
                                </li>
                                <li className="flex items-start gap-[0.75rem] border border-slate-300 bg-blue-50 rounded-[0.75rem] p-[0.875rem] shadow-sm">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Частни клиенти с домашен или работен лаптоп
                                    </span> 
                                </li>
                                <li className="flex items-start gap-[0.75rem] border border-slate-300 bg-blue-50 rounded-[0.75rem] p-[0.875rem] shadow-sm">
                                    <span className="inline-flex w-[1.25rem] h-[1.25rem] items-center justify-center shrink-0 mt-[0.125rem] rounded-[9999px] text-green-600">
                                        {/* svg */}
                                        <CheckCircle
                                            size="size-6"
                                            />
                                    </span>

                                    <span className="text-sm leading-[1.25rem] font-medium min-w-0">
                                        Частни клиенти с домашен или работен лаптоп
                                    </span> 
                                </li>
                                
                                
                                
                            </ul>
                        </div>
                    </div>
            </div>
        </section>
        </>
    )
}