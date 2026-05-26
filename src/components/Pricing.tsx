const plans = [
  {
    name: "Website Development",
    price: "₹15,000",
    period: "one-time",
    description: "A complete, professional website for your business",
    features: [
      "Custom design tailored to your brand",
      "Up to 5 pages",
      "Mobile responsive layout",
      "Contact form integration",
      "SEO optimized structure",
      "Fast loading speed",
      "SSL certificate setup",
      "Domain & hosting guidance",
      "2 rounds of revisions",
      "Delivered in 7 days",
    ],
    cta: "Get Started",
    highlighted: true,
  },
  {
    name: "Website Maintenance",
    price: "Custom",
    period: "on request",
    description: "Keep your website updated and running smoothly",
    features: [
      "Regular content updates",
      "Security patches & backups",
      "Performance monitoring",
      "Bug fixes & troubleshooting",
      "New feature additions",
      "Monthly health reports",
      "Priority support",
      "Uptime monitoring",
    ],
    cta: "Get a Quote",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, <span className="text-blue-500">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            No hidden fees, no surprises. You know exactly what you&apos;re
            paying for. Maintenance is quoted based on your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-blue-500 bg-gradient-to-b from-blue-500/10 to-gray-900"
                  : "border border-gray-800 bg-gray-900/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
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
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-600/25"
                    : "border border-blue-500 text-blue-400 hover:bg-blue-500/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
