import './globals.css'

export const metadata = {
  title: 'Wellbeing daily',
  description: 'This is a wellbeing daily website. It is made to help you fullfill daily tasks that aims to increase your wellbeing. It leads to being happier, having more positive feelings (especially gratitude, connectedness, sense of satisfaction) and being more mindfull.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
