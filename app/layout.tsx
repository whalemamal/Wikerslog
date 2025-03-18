import "./globals.css";
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/Navigation"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/siteheader";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.className
          )}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            >
           <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background">
              <SiteHeader />
             
                <main className="flex-1">{children}</main>
          
              </div>
            </div>
          </ThemeProvider>
          </body>
    </html>
  )
}