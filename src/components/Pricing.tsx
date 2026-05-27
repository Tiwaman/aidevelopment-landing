const inclusions = [
  "Custom design tailored to your brand",
  "Mobile responsive layout",
  "SEO optimized structure",
  "Fast loading speed",
  "SSL certificate setup",
  "Contact form integration",
  "Domain consultancy & setup guidance",
  "Delivered in 7 days",
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Custom <span className="text-blue-500">Quotation</span> Based on
            Your Needs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every business is different. We provide a tailored quote based on
            your specific requirements — no cookie-cutter packages, no hidden
            fees.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-2xl p-8 border-2 border-blue-500 bg-gradient-to-b from-blue-500/10 to-gray-900">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Tailored For You
            </div>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">
                Tell us what you need
              </h3>
              <p className="text-gray-400">
                Share your requirements and we&apos;ll get back with a detailed
                quotation within 24 hours.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {inclusions.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-blue-500 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-600/25"
              >
                Get Your Free Quote
              </a>
              <p className="text-gray-500 text-sm mt-3">
                No obligation • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
