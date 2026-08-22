import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
  title: "About Us | AVIM Events",
  description:
    "Rooted in centuries of royal Indian heritage, AVIM Events translates the hospitality of Rajputana courts into modern, bespoke celebrations.",
};

export default function AboutPage() {
  return (
    <div className="bg-background text-on-background font-body-rt antialiased relative min-h-screen flex flex-col">
      <ScrollAnimation />
      <Navbar />

      <main className="flex-grow pt-24 md:pt-32 pb-24">
        {/* Section 1: Hero Banner */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 scroll-reveal">
          <div
            className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden rounded-lg"
            style={{ border: "1px solid #C9A227" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDioUEpQ4fF4WuJVA-kuD2uFGoIpdkmS4Uqsjc_kR6rRWXz-5MGA6Y3D1Gd0T-L88sKKNHXtjzLc_-20BnmaxMCpYX_uyH-qSQuj8UobYTa8nRassJ1cHNxNx8Hf0tHFTNxQOIrdvZyn4VVrQKIyg75v3vgTQcy8oBq7_ELOrOXe5r4B30zJJLKAT3O3DLw0JVCG_SGI6_qhjKeNScosX5rBifdchtgA0KM389JVup5H_L91GUuxy01JA')",
              }}
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center px-4">
              <h1 className="font-display-lg text-4xl md:text-6xl text-white mb-6 drop-shadow-lg font-bold">
                Our Legacy of Grandeur
              </h1>
              <div className="w-20 h-[1px] bg-gold mx-auto" />
            </div>
          </div>
        </section>

        {/* Section 2: The AVIM Story */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 scroll-reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1 space-y-8">
              <h2 className="font-display-lg text-3xl md:text-4xl text-primary font-bold">
                The AVIM Story
              </h2>
              <p className="font-subheading-sm text-xl text-on-surface-variant leading-relaxed">
                Rooted in centuries of royal Indian heritage, AVIM Events was born
                from a desire to translate the unparalleled hospitality of the
                Rajputana courts into modern, bespoke celebrations. We do not
                merely plan events; we architect legacies.
              </p>
              <p className="font-body-rt text-base text-on-surface-variant leading-relaxed">
                Our founders, drawing upon generations of curating state banquets
                and royal weddings, established a methodology where precision
                meets poetry. Every fabric selected, every floral arrangement
                designed, and every culinary masterpiece presented is steeped in
                a tradition that honors the luxury of detail. We invite you to
                experience hospitality where you are treated not just as a guest,
                but as royalty.
              </p>
              <Link
                href="/contact"
                className="inline-block font-label-caps text-xs text-primary border-b border-tertiary-container pb-1 hover:text-secondary transition-colors uppercase tracking-widest font-semibold"
              >
                Meet The Visionaries →
              </Link>
            </div>
            <div className="order-1 md:order-2 relative flex justify-center">
              <div className="w-full max-w-md aspect-[3/4] relative p-2 border border-tertiary-container/50 shadow-ambient-gold bg-surface rounded-t-[50%] rounded-b-md hover:-translate-y-2 transition-transform duration-500">
                <img
                  className="w-full h-full object-cover rounded-t-[50%] rounded-b-sm"
                  alt="AVIM Founders"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEPB3qxrLeXnB4lsmpYt0YxzzO7RQbodIAY1FuZI0QgA1y5qA_ntCNA5dtAybP-sRhd0KcaxUp0wyDrqcEEPUOpk7j6somrpuFE5KRZdFkS3Eoqh72nwGmrpm6YoLNRFtArTZX295HCXYnIVB7y49Bw99hPEP_iTCvqG95607SDdRKEbZjM0qV6_tnSJUeSHtgTM90uChdUTmlOo_1mTOcNZxV8eN5j8Zu1k1HCm3yl6LCcjL6K891WQ"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Signature Motif Divider */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 flex justify-center items-center opacity-70 scroll-reveal">
          <div className="w-1/3 h-[1px] bg-gradient-to-r from-transparent to-[#C9A227]" />
          <span className="material-symbols-outlined mx-4 text-tertiary-container">
            local_florist
          </span>
          <div className="w-1/3 h-[1px] bg-gradient-to-l from-transparent to-[#C9A227]" />
        </div>

        {/* Section 3: Our Philosophy */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 mb-24 bg-surface-container-low py-16 rounded-xl shadow-ambient-gold border border-gold relative overflow-hidden scroll-reveal">
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-display-lg text-3xl md:text-4xl text-primary mb-4 font-bold">
              Our Philosophy
            </h2>
            <div className="w-20 h-[1px] bg-gold mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-4 md:px-8">
            <div className="bg-surface p-8 text-center border border-gold shadow-ambient-gold flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 rounded-lg">
              <div className="w-16 h-16 rounded-full border border-tertiary-container flex items-center justify-center mb-6 text-tertiary-container">
                <span className="material-symbols-outlined text-3xl">
                  diamond
                </span>
              </div>
              <h3 className="font-subheading-sm text-xl text-primary font-bold mb-4">
                Exclusivity
              </h3>
              <p className="font-body-rt text-base text-on-surface-variant">
                We curate environments that are definitively yours. Each event
                is a singular masterpiece, never replicated, offering a sanctum
                of privacy and unparalleled luxury.
              </p>
            </div>

            <div className="bg-surface p-8 text-center border border-gold shadow-ambient-gold flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 rounded-lg">
              <div className="w-16 h-16 rounded-full border border-tertiary-container flex items-center justify-center mb-6 text-tertiary-container">
                <span className="material-symbols-outlined text-3xl">
                  architecture
                </span>
              </div>
              <h3 className="font-subheading-sm text-xl text-primary font-bold mb-4">
                Precision
              </h3>
              <p className="font-body-rt text-base text-on-surface-variant">
                Flawless execution is our baseline. Behind the grand vistas lies
                an invisible architecture of meticulous planning, ensuring every
                moment unfolds with seamless grace.
              </p>
            </div>

            <div className="bg-surface p-8 text-center border border-gold shadow-ambient-gold flex flex-col items-center hover:-translate-y-2 transition-transform duration-300 rounded-lg">
              <div className="w-16 h-16 rounded-full border border-tertiary-container flex items-center justify-center mb-6 text-tertiary-container">
                <span className="material-symbols-outlined text-3xl">
                  history_edu
                </span>
              </div>
              <h3 className="font-subheading-sm text-xl text-primary font-bold mb-4">
                Heritage
              </h3>
              <p className="font-body-rt text-base text-on-surface-variant">
                We honor the aesthetic and cultural depth of our origins.
                Traditional motifs, artisanal craftsmanship, and time-honored
                rituals are seamlessly integrated into contemporary contexts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Trusted Partners */}
        <section className="max-w-[1280px] mx-auto px-6 md:px-16 text-center scroll-reveal">
          <h2 className="font-display-lg text-3xl md:text-4xl text-primary mb-4 font-bold">
            Trusted Partners
          </h2>
          <div className="w-20 h-[1px] bg-gold mx-auto mb-8" />
          <p className="font-subheading-sm text-xl text-on-surface-variant max-w-2xl mx-auto mb-12">
            Our venues and collaborations are vetted with the highest scrutiny,
            ensuring that our partners align perfectly with the AVIM standard
            of uncompromising luxury.
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 font-label-caps text-xs text-on-surface-variant uppercase tracking-widest font-semibold">
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-tertiary-container text-sm">
                star
              </span>
              Taj Hotels & Palaces
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-tertiary-container text-sm">
                star
              </span>
              The Oberoi Group
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-tertiary-container text-sm">
                star
              </span>
              Leela Palaces
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-tertiary-container text-sm">
                star
              </span>
              ITC Luxury Collection
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-tertiary-container text-sm">
                star
              </span>
              Rambagh Palace
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
