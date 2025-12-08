
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Outfit, Cinzel } from "next/font/google"

const headingFont = Cinzel({ subsets: ["latin"], variable: "--font-heading" })
const bodyFont = Outfit({ subsets: ["latin"], variable: "--font-body" })


export const metadata = {
  title: "Quantum Wellness - Premium Fitness & Wellness",
  description:
    "Transform your health with our premium wellness programs, personal training, and holistic approaches to fitness.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} font-sans antialiased`}>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
