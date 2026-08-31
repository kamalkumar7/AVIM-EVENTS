"use client";

import { useState, useEffect } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    description: "Deep dive into your vision, preferences, and aspirations. Our consultants craft a comprehensive event blueprint.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Strategic Planning",
    description: "Meticulous coordination with vendors, venues, and timelines. Every element is choreographed to perfection.",
    icon: "◆",
  },
  {
    number: "03",
    title: "Creative Direction",
    description: "Design concepts, décor themes, and experiential elements come to life. Your vision takes physical form.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Flawless Execution",
    description: "On-ground command center ensures real-time coordination. Every second counts, every detail matters.",
    icon: "⬒",
  },
  {
    number: "05",
    title: "Post-Event Excellence",
    description: "Comprehensive documentation, feedback collection, and memory preservation. Your story lives on.",
    icon: "◈",
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("process-timeline");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-28 px-6 md:px-16 scroll-reveal" id="process-timeline">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-5">
            Our Process
          </p>
          <h2 className="font-display-lg text-3xl md:text-5xl text-on-background font-bold max-w-2xl leading-tight">
            From Vision to Reality
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative"
              onClick={() => setActiveStep(index)}
            >
              <div
                className={`cursor-pointer transition-all duration-500 p-6 border-2 ${
                  activeStep === index
                    ? "border-primary bg-primary/5"
                    : "border-primary/20 hover:border-primary/50"
                }`}
              >
                <div className="text-4xl font-bold text-primary/30 mb-4">
                  {step.number}
                </div>
                <h3 className="font-headline-md text-lg text-on-background font-bold mb-2">
                  {step.title}
                </h3>
                <span className="text-2xl text-primary/20 block">{step.icon}</span>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 ${
                    activeStep >= index + 1
                      ? "bg-primary"
                      : "bg-primary/20"
                  } transition-colors duration-500`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Active Step Details */}
        <div className="glass-panel p-10 md:p-12">
          <div className="flex items-start gap-6">
            <span className="text-5xl text-primary/30">{steps[activeStep].icon}</span>
            <div className="flex-1">
              <p className="font-label-caps text-[10px] tracking-[0.35em] text-primary uppercase mb-3">
                Step {steps[activeStep].number}
              </p>
              <h3 className="font-display-lg text-3xl text-on-background font-bold mb-4">
                {steps[activeStep].title}
              </h3>
              <p className="font-subheading-sm text-xl text-on-surface-variant leading-relaxed">
                {steps[activeStep].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
