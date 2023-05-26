import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Stats Preview Card Component',
  description: 'by Ryan Stehle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
        className={`${inter.className} px-4 min-h-screen 
        grid place-content-center bg-black`}
      >
        {children}
        </body>
    </html>
  )
}
