import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpertTechSupportSection from '../components/ExpertTechSupportSection';

function ExpertTechSupport() {
  return (
    <div>
      <section>
      <Header bgTransparent={true} />
      <PageHero
  title="Digit Marketing section"
  subtitle="Our mission is to make your business better through technology"
/>
<ExpertTechSupportSection />
      
      <Footer />
    </section>
    </div>
  )
}

export default ExpertTechSupport
