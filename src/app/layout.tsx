"use client"

import "./globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PageHeader from "@/pageheader/page"
import * as React from "react"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  React.useEffect(() => {
    (() => {
      if (typeof window !== "undefined") {
        sessionStorage.getItem("dataInfo")
      }
    })
  }, [])

  return (
    <html lang="en">
      <body className={inter.className}>
        <PageHeader />
        {children}
      </body>
    </html>
  )
}

