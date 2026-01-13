import React from 'react'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import HelpCenter from '../components/HelpCenter'
import FAQSection from '../components/FAQSection'

function HelpDeskCenter() {
  return (
    <div>
      <section>
      <Header />
      <HelpCenter />
      <FAQSection />
      <Footer />

    </section>
    </div>
  )
}

export default HelpDeskCenter
