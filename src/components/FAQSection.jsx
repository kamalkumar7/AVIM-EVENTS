"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How far in advance should I book AVIM Events?",
    answer:
      "For destination weddings and large corporate events, we recommend 6-12 months advance notice. However, we've successfully executed premium events on shorter timelines. Contact us to discuss your specific requirements.",
  },
  {
    question: "What is your coverage area across India?",
    answer:
      "We operate pan-India with established networks in all major metros and heritage destinations. From Jaipur palaces to Kerala backwaters, Goan beaches to Himalayan retreats — we curate experiences across diverse geographies.",
  },
  {
    question: "Do you work with destination events internationally?",
    answer:
      "Yes, we have successfully executed destination events in Maldives, Dubai, Singapore, and Bali. Our international reach extends through trusted global partners and a dedicated concierge network.",
  },
  {
    question: "What makes AVIM Events different from other event companies?",
    answer:
      "Our unique proposition combines luxury heritage hospitality expertise with modern project management. We don't just execute events — we craft bespoke experiences with obsessive attention to detail, operational precision, and creative excellence.",
  },
  {
    question: "Can you accommodate custom themes and unconventional requests?",
    answer:
      "Absolutely. Customization is at the heart of what we do. Whether it's a fusion wedding, a themed corporate gala, or an experimental brand launch, our creative team thrives on translating your boldest visions into reality.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer transparent, tailored pricing based on event scope, guest count, duration, and venue selection. We provide detailed proposals breaking down every element. Let's schedule a consultation to understand your budget and vision.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="py-28 px-6 md:px-16 scroll-reveal">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 text-center">
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-5">
            FAQs
          </p>
          <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold leading-tight">
            Questions & Clarity
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-primary/20 overflow-hidden hover:border-primary/40 transition-colors"
            >
              <button
                className="w-full px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-surface-container-low/50 transition-colors"
                onClick={() => setOpenId(openId === index ? null : index)}
              >
                <h3 className="font-headline-md text-lg text-on-background font-bold flex-1">
                  {faq.question}
                </h3>
                <span
                  className={`text-2xl text-primary flex-shrink-0 transition-transform duration-300 ${
                    openId === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* Expandable answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === index ? "max-h-64" : "max-h-0"
                }`}
              >
                <div className="px-8 py-6 bg-surface-container-low/30 border-t border-primary/10">
                  <p className="font-body-rt text-base text-on-surface-variant leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-subheading-sm text-lg text-on-surface-variant mb-6">
            Didn&apos;t find your answer?
          </p>
          <a
            href="mailto:hello@avimevents.com"
            className="inline-block bg-primary text-on-primary font-label-caps text-xs uppercase tracking-widest px-12 py-4 font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
