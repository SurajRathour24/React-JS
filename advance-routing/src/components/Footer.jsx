import React from "react";

const Footer = () => {
  return (
    <div>
      <div classNameName="footer-wrapper">
        <footer className="bg-gray-900 text-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">MyBrand</h2>
                <p className="text-sm leading-relaxed">
                  Building modern, fast, and scalable web experiences with clean
                  design and performance in mind.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      SEO
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition">
                      Branding
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Newsletter
                </h3>
                <p className="text-sm mb-4">
                  Subscribe to get latest updates and offers.
                </p>
                <form className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none"
                  />
                  <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700 transition">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">© 2026 MyBrand. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition">
                  🌐
                </a>
                <a href="#" className="hover:text-white transition">
                  🐦
                </a>
                <a href="#" className="hover:text-white transition">
                  📘
                </a>
                <a href="#" className="hover:text-white transition">
                  📸
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
