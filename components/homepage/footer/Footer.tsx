import Link from "next/link"
import Image from "next/image"

import ContactListItem from '@/components/homepage/footer/ContactListItem'

import {AppFooterData} from '@/lib/definitions'

export default function AppFooter({
    footerData
}: AppFooterData) {


    return (
        <footer className="bottom-0 left-0 right-0 w-full border border-top border-slate-300 bg-purple-50"> 
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
                            {footerData.aboutText}
                        </p>
                    </div>
                    {/* Contact information */}
                    <div className="min-w-0">

                        <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-green-600">
                            {footerData.contactHeading}
                        </h4>

                        <ul className="space-y-3 text-sm">
                            {/* Address */}
                            {
                                footerData.contactList.map((el) => (
                                    <ContactListItem
                                        key={el.id}
                                        text={el.text}
                                        Icon={<el.icon/>}
                                        />
                                ))
                            }
                            {/* Phone */}
                            
                            {/* Email */}
                            
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