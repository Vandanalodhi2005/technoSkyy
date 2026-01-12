import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import WebDesignDevelopmentSection from '../components/WebDesignDevelopmentSection';

function WebDD() {
  return (
   <section>
      <Header bgTransparent={true} />
      <PageHero
  title="Web designing and development"
  subtitle="Our mission is to make your business better through technology"
/>
    <WebDesignDevelopmentSection />
      
      <Footer />
    </section>
  )
}

export default WebDD
