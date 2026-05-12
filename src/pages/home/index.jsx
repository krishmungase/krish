import { pageTitle } from '@/constants'
import { usePageTitle } from '@/hooks'

import Hero from './sections/hero'
import About from './sections/about'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Journey from './sections/journey'
import CpStats from './sections/cp-stats'
import Contact from './sections/contact'

const HomePage = () => {
  usePageTitle({ title: pageTitle.HOME_PAGE })
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Journey />
      <CpStats />
      <Contact />
    </>
  )
}

export default HomePage
