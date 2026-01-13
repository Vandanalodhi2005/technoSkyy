import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CareerSection from '../components/CareerSection';

function Careers() {
  return (
    <div>
    <section>
      <Header bgTransparent={true} />
      {/* <PageHero
  title="Career"
  subtitle="Our mission is to make your business better through technology"
/> */}
<CareerSection />
      
      <Footer />
    </section>
    </div>
  )
}

export default Careers