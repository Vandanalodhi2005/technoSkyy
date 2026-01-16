import React from 'react'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import ServicesSection from '../components/ServicesSection'
import OurServicesSection from '../components/OurServicesSection'

function Services() {
  return (
    <div>
    <section>
      <Header bgTransparent={true} />
      {/* <PageHero
  title="Services"
  subtitle="Our mission is to make your business better through technology"
/> */}
    <OurServicesSection />

      
      <Footer />
    </section>
    </div>
  )
}

export default Services