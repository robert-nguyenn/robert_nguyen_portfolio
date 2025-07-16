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
  icons: [
    {
      rel: 'icon',
      url: '/robert.png',
      sizes: 'any',
    },
    {
      rel: 'shortcut icon',
      url: '/robert.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/robert.png',
    }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/robert.png" sizes="any" />
        <link rel="shortcut icon" href="/robert.png" />
        <link rel="apple-touch-icon" href="/robert.png" />
      </head>
      <body className="terminal-text">
        {children}
      </body>
    </html>
  )
}
