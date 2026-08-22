"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

const galleryItems = [
  {
    id: 1,
    category: "WEDDING",
    title: "The Royal Mandap",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDa_pGtCo36-qdvHJuiBXWXZscTFPfFuGenslb29UJbe8f50evZMZm9fKjMtMASungonD3_DJEGHW8l8JCTl0_nQkZrizyO18dSt8GgY5B5gEK8lrkkmufZYGHClMUeOJcX2S7uIRXuSRwPx5ESxpqz396EMqoEVmi1-Ndyc3EdDDwoe5ZpLNWzD3tvCcH6T_0_nTDrmaIayrZwYc5uEdS5ck-CSF8x2Qihd0HmdTaqkAYmyJbDIeR6_w",
    hClass: "h-96",
  },
  {
    id: 2,
    category: "CORPORATE",
    title: "Gala Dinner Setup",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBTWfBDYGyStoDnusUV4s-y6je2d1HVUQczQk09mpYkWqgOtklkSsMZ8c5y4V6pth8oQx_CD029JdZtxiaaOyRYJHe8WfGwmrkabcwxpQG2bZvw6TymlLiHTMpb8w1n2ImwKl_uBPkUDAXb6QXqjFXkBcwirzchfNUL1It15qK3tKCvxVLQEVrVhFQi-f_sxZ2ZuCaWz0MZfTmGYSjLOwFVhhML7R_sgiHE_OH2wqktvNKgvZonqS8Xiw",
    hClass: "h-64",
  },
  {
    id: 3,
    category: "SOCIAL",
    title: "Lounge Ambiance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAU1ZbqfnvGyOq-h2l8ou0Ka_H5jJhqWLZCPAUMkbOqPkXRBdHmNcQZWQJZE23lDhuOWuNq-uDtQT40rcb66XmczxWQUD4sPRGKCS5CaJDoiYQFJiBztyL6g7Uns6BvB9hDrUc-SPD711oh9fI3hBIXQVqeTIoOGMCLFviMPwAwW3GguLk_e-dujEdtOYUxb3HbAXZhM5rIfbhONz8DerMDxQvZlkhpzq5Ei4e5-qoCICnEC2KijI17jA",
    hClass: "h-64",
  },
  {
    id: 4,
    category: "WEDDING",
    title: "Palace Illumination",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSNG-EjALXCPLWVdKlK37e_JHMpsPcJZfkdYhB9hWGAx5nsrTDVV54M0JanPVEpclFhQzenHBtINbdTdWeGLNgwvSX296PwHDMizqBuB8Y8d1GfINRgEXGZoPXvYDHLXlutwQvmqEBX_xOvuj9we46n8vj12yEHIggKmqH4XtqFp3rsdLIhFsg3SKw2mW2VYctxNwaOrnvwhlnksjTRGoy8O2f-6pc4S8Fat5hCViEqbTxTRAKvrpJPQ",
    hClass: "h-96",
  },
  {
    id: 5,
    category: "SOCIAL",
    title: "Exotic Florals",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC3kGEiL-rkIUy8RL2vGzcuC756VRxFQUmr4wPUhB7r_xty7pZzDzprzixfNy-ZNLOQyMjOwX4F2VnYcI93rHkM_9WGNXBcOSr5cgKxM1dZ3NYZq6eWRja8Subwbyvp5hliOSV2TWNtk4QKZdUgZGexw5CEl5s1sX_RnabYM3FuWci3KilfeNoepHeMb_ykywjaQMvjFxqBv6lxZcnuzxZtV0yssnV21mdKC-GqML6IgKbWAxG3lXgmVg",
    hClass: "h-96",
  },
  {
    id: 6,
    category: "WEDDING",
    title: "The Grand Entrance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfer-7XiBZGaonvfDrZDt6YMuIRT55XYs5fwI4MmoMXKojHmQcOiR2M8hrUK2g7Mw3aYdWAuWZg9ZaCRtS05byZPuKbsqRwBV5jNbFC6qYK9cwkabUhPzJEfwdQiG5P5YpCvc2PiDMMR4aOF6VsmIvejJomUcqkWHMyAlBYYQ511rP0pSeMoZ9exsFdhqCxGy1jDaaSqdioWqEBt9csiqWPJlhayKBxeHNORndlOldyhyTWksH1Pq9nA",
    hClass: "h-64",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = ["ALL", "WEDDINGS", "CORPORATE", "SOCIAL"];

  const filteredItems =
    activeFilter === "ALL"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeFilter.replace("S", "")
        );

  return (
    <div className="bg-background text-on-background font-body-rt antialiased min-h-screen flex flex-col relative">
      <ScrollAnimation />
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-24">
        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-16 text-center relative scroll-reveal">
          <h1 className="font-display-lg text-4xl md:text-6xl text-primary mb-6 relative inline-block font-bold">
            A Tapestry of Celebrations
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-[1px] bg-tertiary-container" />
          </h1>
          <p className="font-subheading-sm text-xl text-on-surface-variant max-w-2xl mx-auto mt-8 leading-relaxed">
            Explore a curated collection of our most breathtaking events. From
            majestic royal weddings to sophisticated corporate galas, every
            frame captures the essence of impeccable hospitality.
          </p>
        </section>

        {/* Gallery Section */}
        <section className="bg-primary text-on-primary py-20 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-[1280px] mx-auto relative z-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-6 py-2 rounded-full border text-xs font-label-caps tracking-widest uppercase transition-all duration-300 ${
                    activeFilter === cat
                      ? "border-gold bg-surface text-primary font-bold shadow-lg"
                      : "border-tertiary-container/40 text-on-primary hover:border-gold"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`relative group overflow-hidden border border-gold rounded-lg ${item.hClass} shadow-xl`}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="inline-block bg-primary-container text-tertiary-container px-3 py-1 text-[10px] font-label-caps tracking-widest mb-2 border border-tertiary-container/50 font-bold uppercase">
                        {item.category}
                      </span>
                      <h3 className="font-subheading-sm text-xl text-surface font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
