import 'dotenv/config'
import 'rsuite/dist/rsuite-no-reset.min.css'

import "./globals.css"; 

import { CustomProvider } from 'rsuite';

import AppHeader from '@/components/homepage/header/Header'
import AppFooter from "@/components/homepage/footer/Footer";
import {navItems} from '@/lib/placeholderdata'
import { navActionData } from "@/lib/placeholderdata";
import {footerData} from '@/lib/placeholderdata'

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <AppHeader 
          navItems={navItems}
          btnPrimary={navActionData.btnPrimary}
          btnSecondary={navActionData.btnSecondary}
          Icon={<navActionData.icon />}
          />
        <main className="min-h-screen bg-cover bg-center bg-[url(/Gemini_Generated_Image_yj8ifuyj8ifuyj8i.jpg)] bg-fixed">
        <CustomProvider>
          {children}
        </CustomProvider>
        
        </main>
        {/* Footer */}
        <AppFooter 
          footerData={footerData}
          />
      </body>
      
    </html>
  );
}
