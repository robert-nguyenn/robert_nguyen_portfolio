import type { Metadata } from "next"
import "./globals.css"

// node addCatGifs.js

export const metadata: Metadata = {
  title: "ian's personal spot",
  description: "Software Engineer & Computer Science Student at University of Florida. Full-stack developer passionate about building scalable applications.",
  keywords: ["Software Engineer", "Full Stack Developer", "Computer Science", "React", "Next.js", "Python", "Machine Learning"],
  authors: [{ name: "Ian Hoang" }],
  creator: "Ian Hoang",
  openGraph: {
    title: "ian's personal spot",
    description: "Software Engineer & Computer Science Student at University of Florida",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ian's personal spot",
    description: "Software Engineer & Computer Science Student at University of Florida",
  },
  icons: {
    icon: "/logo.svg"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="terminal-text">
        {children}
      </body>
    </html>
  )
}
