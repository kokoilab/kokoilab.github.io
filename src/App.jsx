import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

export default function App() {
  return (
    <LanguageProvider>
      <div className="w-full bg-stone-50 min-h-screen selection:bg-amber-500/20 selection:text-amber-800">
        <Header />
        <Hero />
        <Features />
        <About />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

