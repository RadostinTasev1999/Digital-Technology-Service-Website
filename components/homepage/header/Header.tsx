"use client"

import NavItem from "./ListItem";
import { NavList } from "@/lib/definitions";
import { useState,useEffect } from "react";
import MobileListItems from './MobileMenuItems'
import HeaderLogo from "./HeaderLogo";
import HeaderActions from './HeaderActions'
import MobileHamburger from './MobileHamburger'
import MobileActionButtons from "./MobileActionButtons";


export default function AppHeader({
    navItems,
    btnPrimary,
    btnSecondary,
    Icon
}: NavList) {

    const [mobileOpen, setMobileOpen] = useState(false); // true
    const [showMenu, setShowMenu] = useState(false); // true

    const onMobileClick = () => {
        console.log("Clicked!")
        setMobileOpen(state => !state) // true
        setShowMenu(state => !state) // true
    }

    const onMobileClose = () => {
        setMobileOpen(state => !state) // false
        setShowMenu(state => !state) // false
        // console.log('List item has been clicked!')
    }

    useEffect(() => {
        console.log(mobileOpen)
    },[mobileOpen])

    return (
        <header
            className="fixed top-0 right-0 left-0 z-50 w-full transition-all border-b border-slate-300 bg-white/80 backdrop-blur-lg"
            >
            <div id="main-container" className="mx-auto flex h-19 max-w-7xl items-center justify-between gap-6 px-4 lg:px-8">
                {/* Logo */}
                <HeaderLogo />
                {/* Desktop navigation */}
                <nav className="hidden flex-1 items-center justify-center md:flex">
                    <ul className="flex items-center gap-3">
                        {
                            navItems.map((item) => (
                                <NavItem key={item.id} item={item.name} url={item.url}/>
                            ))
                        }
                    </ul>
                </nav>
                {/* Desktop right side actions */}
                <HeaderActions 
                    btnPrimary={btnPrimary}
                    btnSecondary={btnSecondary}
                    Icon={Icon}
                />

                {/* Mobile hamburger */}
                <MobileHamburger 
                    onMobileClick={onMobileClick}
                    mobileOpen={mobileOpen}
                    />
                
            </div>
            {
                showMenu && (
                    <div className="border-t border-white/10 md:hidden">
                        {/* Scrollable container */}
                        <div className="max-h-[calc(100vh-5rem)] px-4 py-4 overflow-y-auto">
                            <ul className="space-y-1">
                                {
                                    navItems.map((item) => (
                                        <MobileListItems key={item.id} onMobileClose={onMobileClose} item={item.name} url={item.url}/>
                                    ))
                                }
                            </ul>
                            {/* MobileActionButtons */}
                            <MobileActionButtons
                                btnPrimary={btnPrimary}
                                btnSecondary={btnSecondary}
                                Icon={Icon}
                                onMobileClose={onMobileClose}
                            />
                        </div>

                    </div>
                )
            }
        </header>
    );
}