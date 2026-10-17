import HeroStatItem from '@/components/homepage/hero/HeroStatItem'

import {HeroStatisticsData} from '@/lib/definitions'

export default function HeroStatistics({
    heroStatistics
}: HeroStatisticsData) {

    return (
        <section
            id='hero-statistics'
            className='py-16 md:py-20'
        >
            <div
                id='container'
                className='mx-auto px-6 max-w-7xl'
            >
                {/* Grid layout */}
                <div
                    className='grid gap-y-10 md:grid-cols-4 md:gap-x-8'
                >
                    {/* Statistic */}
                    {
                        heroStatistics.map((el) => (
                            <HeroStatItem
                                key={el.id}
                                id={el.id}
                                stat={el.stat}
                                text={el.text}
                                />
                        ))
                    }

                </div>

            </div>

        </section>
    )

}