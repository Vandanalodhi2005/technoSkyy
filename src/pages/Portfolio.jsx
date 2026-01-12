import React from 'react'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import PortfolioSection from '../components/PortfolioSection'
import SkillsAndFeatures from '../components/SkillsAndFeatures'

function Portfolio() {
  return (
    <div>
      <section>
      <Header bgTransparent={true} />
      <PageHero
  title="Portfolio"
  subtitle="Our mission is to make your business better through technology"
/>
    <PortfolioSection />
    <SkillsAndFeatures />
      
      <Footer />
    </section>
    </div>
  )
}

export default Portfolio
