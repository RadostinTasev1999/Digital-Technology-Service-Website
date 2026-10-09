import HeroBadge from '@/components/homepage/hero/HeroBadge'
import HeroHeading from '@/components/homepage/hero/HeroHeading'
import HeroDescription from '@/components/homepage/hero/HeroDescription'
import HeroCtaButtons from '@/components/homepage/hero/HeroCta'
import HeroLogoCard from '@/components/homepage/hero/HeroLogoCard'
import HeroServiceCard from '@/components/homepage/hero/HeroServiceCard'
import HeroLongCard from '@/components/homepage/hero/HeroLongCard'
import HeroStatistics from '@/components/homepage/hero/HeroStatistics'

import { AppHeroData } from '@/lib/definitions'

export default function AppHero({
    badgeText,
    heroHeading,
    heroDescription,
    heroBtn1,
    heroBtn2,
    heroLogoCard,
    heroServiceCards,
    heroLongCard,
    heroStatistics
}: AppHeroData) {

    return (
        <section
            id="hero-section"
            className="relative overflow-hidden text-slate-800"
        >
            {/* Main content container */}
            <div
                id="main-content-container"
                className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 py-20 md:flex-row md:items-center md:px-8 md: py-28"
            >
                {/* Left side */}
                <div id="left-column"
                    className="flex flex-col md:flex-[1.1]"
                >
                    {/* Badge */}
                    
                    <HeroBadge 
                        badgeText={badgeText}
                        />
                    {/* Main heading */}
                    <HeroHeading 
                        heroHeading={heroHeading}
                        />
                    {/* Description */}
                    
                    <HeroDescription 
                        heroDescription={heroDescription}
                        />
                    {/* CTA Buttons */}
                    
                    <HeroCtaButtons 
                        heroBtn1={heroBtn1}
                        heroBtn2={heroBtn2}
                        />
                </div>
                {/* Right side */}
                <div id='right-column' className="relative">
                    <div className="flex flex-wrap gap-4">
                        {/* Business logo card */}
                        <HeroLogoCard 
                            heroLogoCard={heroLogoCard}
                            />
                        
                        {
                            heroServiceCards.map((card) => (
                                <HeroServiceCard
                                    key={card.id}
                                    heroServiceCard={card}
                                    />
                            ))
                        }

                        {/* Long Card */}
                        <HeroLongCard 
                            heroLongCard={heroLongCard}
                            />
                        
                    </div>

                </div>
            </div>
            {/* Hero Statistics */}
            <HeroStatistics
                heroStatistics={heroStatistics}
                    />
            
        </section>
    )
}

/*
    <div 
                id="hero-statistics"
                className='grid grid-cols-2 gap-x-8 gap-y-8  py-8 px-4 border-t-3 border-b-3 border-slate-300  mb-4 mx-auto max-w-7xl md:px-8 md:grid-cols-4'
                >
                    {
                        heroStatistics.map((stat) => (
                            <div id="stat-item" key={stat.id} className="flex flex-col gap-2">
                                <strong className="text-3xl/1 font-extrabold bg-clip-text tracking-[0.03em] basis-full">
                                    <span className="text-4xl font-semibold text-green-600 tracking-tight">{stat.stat}</span>
                                </strong>
                                <span className="text-sm text-slate-600 basis-full max-w-[12rem] leading-5">{stat.text}</span>
                            </div>
                        ))
                    }
            </div>
*/