export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container-max">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="text-xl font-bold">
              <span className="text-blue-500">Ai</span>Development
              <span className="text-blue-500">.in</span>
            </a>
            <p className="text-gray-500 text-sm mt-1">
              Affordable websites for small businesses
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} AiDevelopment.in. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
