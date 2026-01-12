import React from 'react'
import BlogSection from '../components/BlogSection'
import Header from '../components/Header'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'

function Blog() {
  return (
    <div>
    <section>
      <Header bgTransparent={true} />
      <PageHero
  title="blog"
  subtitle="Our mission is to make your business better through technology"
/>
 <BlogSection />
      
      <Footer />
    </section>
    </div>
  )
}

export default Blog