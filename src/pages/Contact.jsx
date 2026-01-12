import React from 'react'
import PageHero from '../components/PageHero'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';
import ContactFormSection from '../components/ContactFormSection';

function Contact() {
  return (
    <section>
      <Header bgTransparent={true} />
      <PageHero
  title="Contact"
  subtitle="Our mission is to make your business better through technology"
/>
<ContactSection />
<ContactFormSection />
      
      <Footer />
    </section>
  )
}

export default Contact;
