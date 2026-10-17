import HeroBadge from '@/components/homepage/hero/HeroBadge'
import HeroHeading from '@/components/homepage/hero/HeroHeading'
import HeroDescription from '@/components/homepage/hero/HeroDescription'
import HeroCtaButtons from '@/components/homepage/hero/HeroCta'
import HeroLogoCard from '@/components/homepage/hero/HeroLogoCard'
import HeroServiceCard from '@/components/homepage/hero/HeroServiceCard'
import HeroLongCard from '@/components/homepage/hero/HeroLongCard'
import HeroStatistics from '@/components/homepage/hero/HeroStatistics'

import { Divider } from 'rsuite'

import { AppHeroData } from '@/lib/definitions'

export default function AppHero({
    badgeText,
    heroHeading,
    heroDescription,
    heroCta,
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
                        heroBtnPrimary={heroCta.btnPrimary}
                        heroBtnSecondary={heroCta.btnSecondary}
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
            {/* Divider */}
            <Divider size="xs" color="#9ac4c6" className='mx-auto max-w-7xl'/>
            {/* Hero Statistics */}
            <HeroStatistics
                heroStatistics={heroStatistics}
                    />
            {/* Divider */}
            <Divider size="xs" color="#9ac4c6" className='mx-auto max-w-7xl'/>
        </section>
    )
}
