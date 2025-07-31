import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 pt-16 pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-3 sm:grid-cols-1 justify-items-center">
          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm font-[EncodeSans]">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">Services</Link>
              </li>
              
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4 text-xl font-[EncodeSans]">
              <a
                href="https://www.facebook.com/Slammllc/"
                aria-label="Facebook"
                className="hover:text-white"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://gh.linkedin.com/company/slammllc"
                aria-label="LinkedIn"
                className="hover:text-white"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/slammllc/"
                aria-label="Instagram"
                className="hover:text-white"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center font-[EncodeSans] text-sm space-y-1">
            <h4 className="text-white font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic">
              10238 Battleview Parkway,<br />
              Manassas, VA, 20109
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500 font-[EncodeSans]">
        &copy; {new Date().getFullYear()} Slamm Technologies Ghana. All rights reserved.
      </div>
    </footer>
  );
}
