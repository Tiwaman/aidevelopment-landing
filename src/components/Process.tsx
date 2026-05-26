const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Tell us about your business and what you need. We'll understand your goals and suggest the best approach — no obligation, no pressure.",
  },
  {
    number: "02",
    title: "Design & Development",
    description:
      "We design and build your website using modern technologies. You'll get previews along the way and can request changes before we finalize.",
  },
  {
    number: "03",
    title: "Launch & Maintain",
    description:
      "Your website goes live! We handle hosting setup, domain connection, and provide ongoing maintenance to keep everything running smoothly.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-gray-900/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Getting your website is as simple as 1-2-3. No complicated
            processes, no jargon — just results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent" />
              )}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border-2 border-blue-500 text-blue-400 text-xl font-bold mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Average delivery time:{" "}
            <span className="text-blue-400 font-semibold">5-7 business days</span>
          </p>
        </div>
      </div>
    </section>
  );
}
