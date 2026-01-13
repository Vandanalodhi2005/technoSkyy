import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ITSupportSection from '../components/ITSupportSection';

function ITSupport() {
  return (
    <div>
      <section>
      <Header bgTransparent={true} />
      {/* <PageHero
  title="it support "
  subtitle="Our mission is to make your business better through technology"
/> */}

    <ITSupportSection />
      <Footer />
    </section>
    </div>
  )
}

export default ITSupport
