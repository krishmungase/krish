import { AppLayout } from './pages'
import { ThemeProvider } from './providers'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <AppLayout />
    </ThemeProvider>
  )
}

export default App
