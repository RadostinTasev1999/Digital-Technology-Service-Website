import HeroBadge from '@/components/homepage/hero/HeroBadge'
import HeroHeading from '@/components/homepage/hero/HeroHeading'
import HeroDescription from '@/components/homepage/hero/HeroDescription'
import HeroCtaButtons from '@/components/homepage/hero/HeroCta'
import HeroLogoCard from '@/components/homepage/hero/HeroLogoCard'
import HeroServiceCard from '@/components/homepage/hero/HeroServiceCard'
import HeroLongCard from '@/components/homepage/hero/HeroLongCard'

import { AppHeroData } from '@/lib/definitions'

export default function AppHero({
    badgeText,
    heroHeading,
    heroDescription,
    heroBtn1,
    heroBtn2,
    heroLogoCard,
    heroServiceCard,
    heroLongCard
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
                <div className="relative">
                    <div className="flex flex-wrap gap-4">
                        {/* Business logo card */}
                        <HeroLogoCard 
                            heroLogoCard={heroLogoCard}
                            />
                        {/* Technical Support Card */}
                        <HeroServiceCard 
                            heroServiceCard={heroServiceCard}
                            />
                        {/* Technical Support Card */}
                        <HeroServiceCard 
                            heroServiceCard={heroServiceCard}
                            />
                        {/* <HeroServiceCard /> */}
                        {/* Long Card */}
                        <HeroLongCard 
                            heroLongCard={heroLongCard}
                            />
                        
                    </div>

                </div>
            </div>
        </section>
    )
}