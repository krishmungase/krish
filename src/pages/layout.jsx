import { Header, Footer } from '@/components'
import { CustomCursor, Noise } from '@/components/effects'
import HomePage from './home'

const AppLayout = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-background text-foreground">
      <Noise />
      <CustomCursor />
      <Header />
      <main className="relative z-10 flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout
