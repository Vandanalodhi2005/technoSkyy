import React from 'react'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import SolutionSection from '../components/SolutionSection'

function Solutions() {
  return (
    <div>
   <section>
      <Header bgTransparent={true} />
      {/* <PageHero
  title="Solutions"
  subtitle="Our mission is to make your business better through technology"
/> */}
<SolutionSection />
      
      <Footer />
    </section>
    </div>
  )
}

export default Solutions