import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SoftwareDevelopmentSection from '../components/SoftwareDevelopmentSection'

function SoftwareDevelopment() {
  return (
  <div>
    <section>
      <Header bgTransparent={true} />
      <PageHero
  title="software development"
  subtitle="Our mission is to make your business better through technology"
/>
   <SoftwareDevelopmentSection />
      
      <Footer />
    </section>
  </div>
  )
}

export default SoftwareDevelopment
