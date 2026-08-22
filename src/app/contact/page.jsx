"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background text-on-background font-body-rt antialiased min-h-screen flex flex-col relative">
      <ScrollAnimation />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-24 px-6 md:px-16 max-w-[1280px] mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-16 md:mb-20 relative scroll-reveal">
          <h1 className="font-display-lg text-4xl md:text-6xl text-primary mb-6 font-bold">
            Begin Your Journey
          </h1>
          <p className="font-subheading-sm text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Connect with our royal concierges to curate an unforgettable
            experience. Your legacy begins with a single conversation.
          </p>
          <div className="mt-8 flex justify-center">
            <span className="material-symbols-outlined text-tertiary-container text-2xl">
              local_florist
            </span>
          </div>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Form */}
          <div className="lg:col-span-7 bg-surface p-8 md:p-12 border border-primary relative shadow-xl rounded-lg scroll-reveal">
            {/* Corner Filigree Accent */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold -translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold translate-x-1 translate-y-1" />

            <h2 className="font-headline-md text-3xl text-primary mb-8 font-bold">
              Royal Enquiry
            </h2>

            {submitted ? (
              <div className="bg-surface-container p-8 text-center border border-gold rounded-lg">
                <span className="material-symbols-outlined text-tertiary-container text-5xl mb-4">
                  auto_awesome
                </span>
                <h3 className="font-display-lg text-2xl text-primary mb-3 font-bold">
                  Enquiry Received
                </h3>
                <p className="font-body-rt text-base text-on-surface-variant mb-6">
                  Thank you, {formData.name || "valued guest"}. Our master
                  concierge team will reach out to you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      eventType: "",
                      date: "",
                      message: "",
                    });
                  }}
                  className="bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase px-6 py-3 rounded shimmer-btn font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 font-body-rt">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      className="w-full bg-transparent border-b border-gold py-2 text-on-surface focus:border-primary focus:outline-none transition-colors"
                      placeholder="Full Name *"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <input
                      className="w-full bg-transparent border-b border-gold py-2 text-on-surface focus:border-primary focus:outline-none transition-colors"
                      placeholder="Email Address *"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <input
                      className="w-full bg-transparent border-b border-gold py-2 text-on-surface focus:border-primary focus:outline-none transition-colors"
                      placeholder="Phone Number"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <select
                      className="w-full bg-transparent border-b border-gold py-2 text-on-surface focus:border-primary focus:outline-none transition-colors"
                      value={formData.eventType}
                      onChange={(e) =>
                        setFormData({ ...formData, eventType: e.target.value })
                      }
                    >
                      <option value="" disabled className="text-gray-500">
                        Select Event Type
                      </option>
                      <option value="wedding">Royal Wedding</option>
                      <option value="corporate">Corporate Gala</option>
                      <option value="milestone">Milestone Celebration</option>
                      <option value="anniversary">Anniversary Dinner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-label-caps text-on-surface-variant uppercase tracking-widest mb-1 font-semibold">
                    Preferred Event Date
                  </label>
                  <input
                    className="w-full bg-transparent border-b border-gold py-2 text-on-surface focus:border-primary focus:outline-none transition-colors"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                  />
                </div>

                <div>
                  <textarea
                    className="w-full bg-transparent border-b border-gold py-2 text-on-surface focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Share the vision for your event..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-primary-container text-tertiary-fixed font-label-caps text-xs tracking-widest uppercase hover:bg-primary transition-colors border border-gold shimmer-btn font-semibold rounded"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            )}
          </div>

          {/* Right: Details & Concierge CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 scroll-reveal">
            <div>
              <h3 className="font-headline-md text-3xl text-primary mb-6 font-bold">
                Concierge Details
              </h3>
              <div className="space-y-6 font-body-rt text-on-surface-variant">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold mt-1">
                    location_on
                  </span>
                  <div>
                    <strong className="text-on-surface block mb-1">
                      Headquarters
                    </strong>
                    The Royal Pavilion, Sector 4<br />
                    Udaipur, Rajasthan 313001<br />
                    India
                  </div>
                </div>

                <div className="h-[1px] bg-gold/30 my-4" />

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold mt-1">
                    call
                  </span>
                  <div>
                    <strong className="text-on-surface block mb-1">
                      Direct Line
                    </strong>
                    +91 98765 43210
                    <br />
                    <span className="text-xs">
                      Available 9:00 AM - 8:00 PM IST
                    </span>
                  </div>
                </div>

                <div className="h-[1px] bg-gold/30 my-4" />

                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-gold mt-1">
                    mail
                  </span>
                  <div>
                    <strong className="text-on-surface block mb-1">
                      Electronic Mail
                    </strong>
                    concierge@avimevents.com
                  </div>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp CTA */}
            <div className="p-8 bg-surface-container border border-gold text-center shadow-lg rounded-lg">
              <h4 className="font-subheading-sm text-xl text-primary mb-3 font-bold">
                Instant Assistance
              </h4>
              <p className="font-body-rt text-sm text-on-surface-variant mb-6">
                Prefer to message? Connect with our luxury planning team directly
                on WhatsApp for immediate responses.
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-gold text-primary font-label-caps text-xs uppercase tracking-widest hover:bg-secondary-container transition-colors rounded font-semibold"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
