import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import DigitalMarketingSection from '../components/DigitalMarketingSection';

function DigitalMarketing() {
  return (
    <div>
   <section>
      <Header bgTransparent={true} />
      <PageHero
  title="Digit Marketing section"
  subtitle="Our mission is to make your business better through technology"
/>
<DigitalMarketingSection />
      
      <Footer />
    </section>
    </div>
  )
}

export default DigitalMarketing
