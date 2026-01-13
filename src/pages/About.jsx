import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatWeDoSection from '../components/WhatWeDoSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import CTASection from '../components/CTASection'
import TeamSection from '../components/TeamSection'
import PageHero from '../components/PageHero'
import AboutPage from '../components/AboutPage'
import AboutWhyChooseSection from '../components/AboutWhyChooseSection'

function About() {
  return (
    <div>
    <section>
      <Header bgTransparent={true} />
      <PageHero
       title="About Us"
       subtitle="Our mission is to make your business better through technology"
      />
      <AboutPage />
      <AboutWhyChooseSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </section>
    </div>
  )
}

export default About