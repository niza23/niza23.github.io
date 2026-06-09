import '../styles/globals.css'

export const metadata = {
  title: 'Nidhi Zala | Site Reliability Engineer',
  description: 'Enterprise production systems scaling and platform optimization.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}