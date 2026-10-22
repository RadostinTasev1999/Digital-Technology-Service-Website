import ServiceCard from '@/components/ui/ServiceCard'

export default function ServiceProcess(){

    return(
        <section id="service-process" className="py-16 md:py-24" aria-label="service-process-info">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Column: Content & Steps */}

                <div>
                    <p className="text-sm font-semibold tracking-wide uppercase mb-2 text-green-700">
                        Процес на работа
                    </p>
                    <h2 id="service-process-title" className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Ремонтът в няколко стъпки</h2>
                    <p className="text-md text-gray-700 mb-3 pb-8 border-b border-slate-400">Конкретни цени, Прозрачен процес. Статусът на услугата се вижда в реално време.</p>

                    <ol className="space-y-6">
                        {/* Step-1 */}
                        <li className="flex items-start gap-4 border-b border-slate-400 pb-3">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full border border-green-500 backdrop-blur-md bg-white/80 text-green-500 font-bold flex items-center justify-center">
                                01
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Приемане на техниката</h3>
                                <p className="text-gray-600">
                                    Разговаряме относно проблема и Вашите очаквания
                                </p>
                            </div>
                        </li>
                        {/* Step-2 */}
                        <li className="flex items-start gap-4 border-b border-slate-400 pb-3">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full backdrop-blur-md bg-white/50 font-bold flex items-center justify-center border border-green-500 bg-white/80 text-green-500">
                                         {/* flex-shrink-0 w-10 h-10 rounded-full border border-green-700 bg-white/70 text-green-700 font-bold flex items-center justify-center */}
                                02
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Диагностика</h3>
                                <p className="text-gray-600">
                                    Диагностициране на проблема за да преценим най-добрата следваща стъпка спрямо състоянието.
                                </p>
                            </div>
                        </li>
                        {/* Step-3 */}
                        <li className="flex items-start gap-4 border-b border-slate-400 pb-3">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full backdrop-blur-md bg-white/50 font-bold flex items-center justify-center border border-green-500 bg-white/80 text-green-500">
                                03
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Обсъждаме варианти за ремонт</h3>
                                <p className="text-gray-600">
                                    Предлагаме конкретни решения спрямо проблема и обсъждаме цена за вложен труд и части.
                                </p>
                            </div>
                        </li>
                        {/* Step-4 */}
                        <li className="flex items-start gap-4 border-b border-slate-400 pb-3">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full backdrop-blur-md bg-white/80 font-bold flex items-center justify-center border border-green-500 bg-white/70 text-green-500">
                                04
                            </span>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">Изпълняване на ремота</h3>
                                <p className="text-gray-600">
                                    Ремонтираме техниката в предварително уговорен срок.
                                </p>
                            </div>
                        </li>
                    </ol>
                </div>

                {/* Right Column: */}
                <ServiceCard />
            </div>

        </section>
    )
}