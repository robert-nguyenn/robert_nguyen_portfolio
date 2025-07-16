import type { Metadata } from "next"
import "./globals.css"

// node addCatGifs.js

export const metadata: Metadata = {
  title: "robert's portfolio",
  description: "Computer Science Student at Centre College. Software Engineer with experience in distributed systems, databases, and scalable applications.",
  keywords: ["Software Engineer", "Computer Science", "Distributed Systems", "PostgreSQL", "gRPC", "Kubernetes", "Python", "Java", "TypeScript"],
  authors: [{ name: "Robert Nguyen" }],
  creator: "Robert Nguyen",
  openGraph: {
    title: "robert's portfolio",
    description: "Computer Science Student at Centre College. Software Engineer specializing in distributed systems and databases.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "robert's portfolio",
    description: "Computer Science Student at Centre College. Software Engineer specializing in distributed systems and databases.",
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
