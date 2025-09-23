"use client"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import ScrollToTop from "../components/scroll-to-top"

export default function ClientWrapper({ children }) {
  return (
    <>
      <div className="min-h-screen bg-background">
        <Header />
        <Suspense fallback={<div>Yükleniyor...</div>}>{children}</Suspense>
        <Footer />
        <ScrollToTop />
      </div>
      <Analytics />
    </>
  )
}
