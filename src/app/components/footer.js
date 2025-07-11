import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-4 sm:grid-cols-2">
        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm font-[EncodeSans]">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
          <ul className="space-y-2 text-sm font-[EncodeSans]">
            <li>123 Cybersecurity Blvd</li>
            <li>Accra, Ghana</li>
            <li>Phone: +233 24 000 0000</li>
            <li>Email: info@slammsoc.com</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl font-[EncodeSans]">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Company Overview */}
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">About Slamm SOC</h4>
          <p className="text-sm leading-relaxed font-[EncodeSans]">
            We provide cutting-edge cybersecurity solutions with a blend of AI-powered tools and human expertise.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500 font-[EncodeSans]">
        &copy; {new Date().getFullYear()} Slamm SOC Experts. All rights reserved.
      </div>
    </footer>
  );
}
