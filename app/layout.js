import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientWrapper from "./client-wrapper"

export const metadata = {
  title: "Yeksan İnşaat - Profesyonel İnşaat Hizmetleri",
  description: "Yeksan İnşaat olarak kaba inşaat, tadilat, yalıtım, projelendirme ve danışmanlık hizmetleri sunuyoruz.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  )
}
