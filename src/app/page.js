import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <div className="bg-background text-on-background font-body-rt antialiased relative min-h-screen">
      <ScrollAnimation />
      <Navbar />

      {/* Pattern Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-[0.02]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236e0d25' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center pt-20 overflow-hidden"
          id="home"
        >
          <div className="absolute inset-0 z-0 parallax-container">
            <div
              className="bg-cover bg-center w-full h-[120%] object-cover parallax-bg"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS27Bp9YuzAblMi3iAbY9TN-lV4CbahWMOPT3Kj4BGXdmrP9Hehu9PBhZHZONAQS0ArYQU1LUdpLEqoo-yfpbHIO-YReYcrX-u4CvmhnqABNx_JEUL2yYyJDFPfH2r2YyNk_PI5xU_2Rs5eN4_SBAPgqeVCgc0SpZk-lBGvcs45u5AIgkOvhDi9NTm7NkTWDqb7NcMYuJz_aKP2QPMvRtZ6vXghTbtq236NG2ZHd5z__OiQ0lg8KZb5Q')",
                transform: "translateY(0px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
          </div>

          <div className="relative z-10 text-center max-w-4xl px-6 md:px-16 mx-auto flex flex-col items-center mt-20 scroll-reveal">
            <h1 className="font-display-lg text-4xl md:text-6xl text-primary mb-6 drop-shadow-md font-bold">
              Crafting Regal Celebrations Across India
            </h1>
            <p className="font-subheading-sm text-xl text-on-surface-variant mb-10 max-w-2xl">
              Luxury Event Management for Weddings, Milestones, and Brand
              Launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase px-8 py-4 rounded hover:bg-primary transition-colors shadow-ambient-gold shimmer-btn text-center font-semibold"
              >
                Plan Your Event
              </Link>
              <Link
                href="/gallery"
                className="bg-surface text-primary border border-tertiary-container font-label-caps text-xs uppercase px-8 py-4 rounded hover:bg-surface-variant transition-colors hover-lift text-center font-semibold"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Intro & Stats */}
        <section
          className="py-24 px-6 md:px-16 max-w-[1280px] mx-auto text-center scroll-reveal"
          id="about"
        >
          <div className="flex justify-center mb-8">
            <span className="material-symbols-outlined text-tertiary-container text-3xl">
              auto_awesome
            </span>
          </div>
          <p className="font-subheading-sm text-xl md:text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 leading-relaxed">
            Rooted in the timeless grandeur of Indian heritage and elevated by
            modern hospitality standards, AVIM Events curates bespoke
            experiences. For over a decade, we have transformed visions into
            breathtaking realities, ensuring every detail reflects the prestige
            of our clientele.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center hover-lift p-4 rounded-xl">
              <span className="font-display-lg text-3xl md:text-4xl text-primary mb-2 font-bold">
                15+
              </span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">
                Years
              </span>
            </div>
            <div className="flex flex-col items-center hover-lift p-4 rounded-xl">
              <span className="font-display-lg text-3xl md:text-4xl text-primary mb-2 font-bold">
                500+
              </span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">
                Events
              </span>
            </div>
            <div className="flex flex-col items-center hover-lift p-4 rounded-xl">
              <span className="font-display-lg text-3xl md:text-4xl text-primary mb-2 font-bold">
                20+
              </span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">
                Cities
              </span>
            </div>
            <div className="flex flex-col items-center hover-lift p-4 rounded-xl">
              <span className="font-display-lg text-3xl md:text-4xl text-primary mb-2 font-bold">
                50+
              </span>
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">
                Partners
              </span>
            </div>
          </div>

          <div className="h-px bg-tertiary-container mx-auto mt-16 line-draw scroll-reveal" />
        </section>

        {/* Services */}
        <section
          className="py-24 px-6 md:px-16 bg-surface-container-low scroll-reveal"
          id="services"
        >
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16 scroll-reveal">
              <h2 className="font-display-lg text-3xl md:text-4xl text-primary mb-4 font-bold">
                Our Expertise
              </h2>
              <p className="font-subheading-sm text-xl text-on-surface-variant">
                Tailored elegance for every occasion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <Link href="/services" className="group cursor-pointer hover-lift rounded-lg">
                <div className="relative h-96 jharokha-arch overflow-hidden filigree-border mb-6 service-card">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCYBgRmT83apIbSXEdN7XS2BDNRgetXqEbnJExh0xQ1HXCkzkTSNSIuE5IHw7R25RKS2uSgW7WOfqu0t-PcKzH6FVFW-M2FhziAH3zYij6CEvlLSlqOOdY2ta8lDb_rOD0FwUVk1a7dtDEYiJxB3PGPPWIGmKga4a00VjaZhm-xcdOw0avdtl8SrM6ZWNK3f10ZIKbHeit7mR4OuAeJKTuqpkw0Teoo6W-6UotVOyDB5W0eSENMalpOgA')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent service-overlay" />
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="font-headline-md text-2xl text-on-primary service-text font-bold">
                      Weddings
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Service 2 */}
              <Link href="/services" className="group cursor-pointer hover-lift rounded-lg">
                <div className="relative h-96 jharokha-arch overflow-hidden filigree-border mb-6 service-card">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcnby9yQdOWCz2tYEkn0aCmjSh0l7i_BFTd0e7tUJqdnHTB814ioJFeVchTGchToaIxPQ5VbEBbn--jUupxEjylJTVkZKXGP7Qv5ZftrDYAi4KBQ-QhvLA1x4hQTamoadOBK5pKrhMGRfmJ-y2lYAhokFs_K4Elx8ySf0VGoGrYUFxnSLa6uHg_U8g_YEhThVKCVhyoVD_fya1sRf3cLzv82he1xz7SUDZeELSfIZy-vhHpH0s24NYTQ')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent service-overlay" />
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="font-headline-md text-2xl text-on-primary service-text font-bold">
                      Milestones
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Service 3 */}
              <Link href="/services" className="group cursor-pointer hover-lift rounded-lg">
                <div className="relative h-96 jharokha-arch overflow-hidden filigree-border mb-6 service-card">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1qMKFzUJkWlGievMPDCcZMJ-AHc864sYXqzN4bjWCOHmQPwoio5AE8yiCqzrLe8Y9o7J_AbblsDQLM9RKRpnq0DgT2wT2VHrjlj60LYaS932OWS650i4n-PnjLuxQ4wl7hzaG7ZyBgIv49Iu6aRhuzreNG144HIfGpWeuO1fKns2oiVrFDwCgzkSOrtqbr2ynFQcr0rwfREy0s63RR-XiibNUqA69jnjlralkFu5X3iGclkwfaie4Og')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent service-overlay" />
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="font-headline-md text-2xl text-on-primary service-text font-bold">
                      Brand Launches
                    </h3>
                  </div>
                </div>
              </Link>

              {/* Service 4 */}
              <Link href="/services" className="group cursor-pointer hover-lift rounded-lg">
                <div className="relative h-96 jharokha-arch overflow-hidden filigree-border mb-6 service-card">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCVNXa2qnOQIE4nhtJyzR6MVBobk0LIpJHgJxiFGqWov4q4DdbqLrV9aIznb5WS-fqhBhgEpPtUjKO2I2ioH7SVtqSn2Pw7GSR6pXlrflMnsEbtEWN5tR_eMZGifaTQQWLZnCfPh7m6TFzUjEduHn57KRtB-xuQujexTyotlXTAlErJdSwnvDzHc2OPQhAd4e1Fr82noOJ7zq0V8RcDVClRNkddv-FIpnOJ2mQjENpkov3fGDOrY201xQ')",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent service-overlay" />
                  <div className="absolute bottom-6 left-0 w-full text-center">
                    <h3 className="font-headline-md text-2xl text-on-primary service-text font-bold">
                      Anniversaries
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Signature Callout */}
        <section className="py-24 px-6 md:px-16 text-center max-w-4xl mx-auto scroll-reveal">
          <h2 className="font-display-lg text-3xl md:text-5xl text-primary mb-6 font-bold">
            Ready to Begin Your Royal Story?
          </h2>
          <p className="font-subheading-sm text-xl text-on-surface-variant mb-10 max-w-xl mx-auto">
            Allow our master concierges to craft an unparalleled experience for your upcoming celebration.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-container text-tertiary-fixed font-label-caps text-xs uppercase px-10 py-5 rounded hover:bg-primary transition-colors shadow-ambient-gold shimmer-btn font-semibold"
          >
            Connect With Our Concierge
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
