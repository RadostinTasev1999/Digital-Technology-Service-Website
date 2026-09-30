import "./globals.css";
import AppHeader from '@/components/homepage/header/Header'
import AppFooter from "@/components/homepage/footer/Footer";
import {navItems} from '@/lib/placeholderdata'
import { navActionData } from "@/lib/placeholderdata";



export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className="min-h-full flex flex-col">
        {/* Header */}
        <AppHeader 
          navItems={navItems}
          phone={navActionData.phone}
          text={navActionData.text}
          />
        <main className="min-h-screen bg-cover bg-center bg-[url(/Gemini_Generated_Image_yj8ifuyj8ifuyj8i.jpg)] bg-fixed">
        {children}
        </main>
        {/* Footer */}
        <AppFooter />
      </body>
      
    </html>
  );
}
