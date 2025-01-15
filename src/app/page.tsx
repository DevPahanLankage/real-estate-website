'use client';

import { motion } from 'framer-motion'
import { useState } from 'react';
import Image from 'next/image';
import HeroSlideshow from '@/components/HeroSlideshow';

const properties = [
  {
    id: 1,
    title: "Luxury Waterfront Villa",
    type: "Residential",
    price: "$2,500,000",
    location: "Mission Bay",
    specs: "5 Beds • 4 Baths • 450m²",
    imageUrl: "/placeholder.jpg",
    status: "For Sale"
  },
  {
    id: 2,
    title: "Modern City Apartment",
    type: "Residential",
    price: "$850,000",
    location: "Auckland CBD",
    specs: "2 Beds • 2 Baths • 85m²",
    imageUrl: "/placeholder.jpg",
    status: "For Sale"
  },
  {
    id: 3,
    title: "Commercial Office Space",
    type: "Commercial",
    price: "$1,200,000",
    location: "Newmarket",
    specs: "200m² • Open Plan",
    imageUrl: "/placeholder.jpg",
    status: "For Lease"
  },
  // Add more properties as needed
];

const testimonials = [
  {
    id: 1,
    name: "Krishan Sampath",
    role: "Property Buyer",
    image: "/testimonial1.jpg",
    quote: "I recently purchased a property through John at LJ Hooker Drury, and the experience was exceptional. John made the entire buying process seamless, guiding me every step of the way with professionalism and expertise. He was always available to answer my questions, address any concerns, and provide honest advice, which helped me make informed decisions.",
    rating: 5
  },
  {
    id: 2,
    name: "Dominique Rocas",
    role: "Property Seller",
    image: "/testimonial2.jpg",
    quote: "John was exceptional throughout the entire process of selling our home! He managed to sell our property quickly and efficiently, without relying heavily on marketing, thanks to his hard work and extensive network. The communication and entire process were smooth and stress-free, all thanks to his efforts.",
    rating: 5
  }
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen">
        <HeroSlideshow />
        <div className="relative container h-full flex items-center z-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span className="text-white font-dmsans text-lg font-bold">Welcome to</span>
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white">
                Your Journey Home <br />
                Starts With Trust
              </h1>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8"
            >
              Hi, I&apos;m John Doe. For over a decade, I&apos;ve been helping families find their perfect homes in Auckland. My approach is simple: honesty, transparency, and a genuine commitment to your success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-4"
            >
              <button className="btn-primary bg-white text-primary hover:bg-white/90">Schedule a Consultation</button>
              <button className="btn-secondary border-2 border-primary text-primary hover:text-white hover:border-white hover:bg-primary transition-all">View My Listings</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <span className="text-accent font-dmsans">About Me</span>
                <h2 className="text-4xl font-playfair font-bold text-primary">
                  Experience You Can Trust
                </h2>
              </div>
              <p className="text-text-dark">
                As a Senior sales professional, I bring a wealth of experience from the retail and financial services industry to real estate. My journey has equipped me with extensive expertise in sales, customer service, banking, and credit analysis – skills that prove invaluable in helping you make informed property decisions.
              </p>
              <p className="text-text-dark">
                I hold a Master of Business Administration (MBA) from London Metropolitan University, which has given me the strategic insight to navigate complex property transactions. Now, as a Real Estate Sales Marketing & Consultant, I combine my financial acumen with my passion for property to deliver exceptional results for my clients.
              </p>
              <p className="text-text-dark">
                What sets me apart is my ability to find tailored solutions that perfectly match your needs. Whether you&apos;re buying your first home, upgrading to a larger property, or looking for investment opportunities, I bring the same level of dedication and expertise to every transaction.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-accent">MBA</h3>
                  <p className="text-sm text-text-dark">Business Management</p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-accent">15+</h3>
                  <p className="text-sm text-text-dark">Years in Sales & Finance</p>
                </div>
              </div>
              <div className="pt-4">
                <button className="btn-primary">Read My Story</button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] bg-secondary rounded-lg overflow-hidden"
            >
        <Image
                src="/images/profile.jpg"
                alt="John Doe - Real Estate Professional"
                fill
                className="object-cover object-center"
          priority
        />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-lg shadow-lg backdrop-blur-sm bg-white/90">
                <h3 className="font-playfair font-bold text-xl mb-2">John Doe</h3>
                <p className="text-sm text-text-dark mb-2">Senior Real Estate Professional at LJ Hooker</p>
                <div className="flex items-center gap-4 text-sm text-text-dark/80">
                  <span>Licensed Agent</span>
                  <span>•</span>
                  <span>Property Specialist</span>
                  <span>•</span>
                  <span>Market Expert</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-20 bg-bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Featured Properties
            </h2>
            <p className="text-text-dark max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties, each chosen for their exceptional value and prime locations.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            {['All', 'For Sale', 'For Lease', 'Residential', 'Commercial'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-white text-text-dark hover:bg-primary/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Properties Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties
              .filter(property => 
                activeFilter === 'All' || 
                property.status === activeFilter || 
                property.type === activeFilter
              )
              .map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 bg-secondary">
                    {/* Property Image will go here */}
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                      {property.status}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair font-bold text-xl mb-2">{property.title}</h3>
                    <p className="text-accent font-bold mb-2">{property.price}</p>
                    <p className="text-text-dark mb-2">{property.location}</p>
                    <p className="text-sm text-text-dark/80">{property.specs}</p>
                  </div>
                  <div className="px-6 pb-6">
                    <button className="w-full btn-secondary">View Details</button>
                  </div>
                </motion.div>
              ))}
          </div>

          {/* View More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="btn-primary">View All Properties</button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p className="text-text-dark max-w-2xl mx-auto">
              Hear from our valued clients about their experiences and successful property journeys.
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                      opacity: activeTestimonial === index ? 1 : 0,
                      x: activeTestimonial === index ? 0 : 100
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-full ${activeTestimonial === index ? 'block' : 'hidden'}`}
                  >
                    <div className="max-w-3xl mx-auto text-center">
                      <div className="mb-8">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary" />
                        <div className="flex justify-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-accent"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <blockquote className="text-xl font-medium text-text-dark mb-8">
                        &quot;{testimonial.quote}&quot;
                      </blockquote>
                      <div className="font-playfair">
                        <cite className="font-bold text-primary block not-italic">
                          {testimonial.name}
                        </cite>
                        <span className="text-text-dark/80">{testimonial.role}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeTestimonial === index
                      ? 'bg-primary scale-125'
                      : 'bg-primary/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => setActiveTestimonial(prev => 
                prev === 0 ? testimonials.length - 1 : prev - 1
              )}
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-accent transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTestimonial(prev => 
                prev === testimonials.length - 1 ? 0 : prev + 1
              )}
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-accent transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-bg-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-text-dark max-w-2xl mx-auto">
              Ready to start your property journey? I&apos;m here to help you every step of the way.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-dark mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-dark mb-2">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-dark mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">Send Message</button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-playfair font-bold text-primary">Contact Details</h3>
                  <p className="text-text-dark">Feel free to reach out anytime. I&apos;m here to assist you.</p>
                </div>
                <div className="space-y-4">
                  <a href="tel:+64123456789" className="flex items-center space-x-4 text-text-dark hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+64 123 456 789</span>
                  </a>
                  <a href="mailto:john.doe@ljhooker.co.nz" className="flex items-center space-x-4 text-text-dark hover:text-primary transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>john.doe@ljhooker.co.nz</span>
                  </a>
                  <div className="flex items-center space-x-4 text-text-dark">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>LJ Hooker Drury Office</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-playfair font-bold text-primary">Office Hours</h3>
                  <p className="text-text-dark">Available for appointments and viewings:</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-text-dark">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between text-text-dark">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between text-text-dark">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-bold">John Doe</h3>
              <p className="text-white/80">Your trusted partner in real estate, helping you make informed decisions for your property journey.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold font-dmsans">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
                <li><a href="#properties" className="text-white/80 hover:text-white transition-colors">Properties</a></li>
                <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold font-dmsans">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Property Sales</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Property Management</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Market Analysis</a></li>
                <li><a href="#" className="text-white/80 hover:text-white transition-colors">Property Valuation</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold font-dmsans">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; {new Date().getFullYear()} John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
