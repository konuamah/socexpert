"use client";
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
              <li>
                <Link href="/blog" className="hover:underline">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm font-[EncodeSans]">
              <li>Koforidua House, Dome Pillar 2 Road, near Parakuo Estate</li>
              <li>Accra, Ghana</li>
              <li>Phone: +233 (0) 552280177</li>
              <li>Phone: +233 (0) 546875600</li>
              <li>Email: <a href="mailto:info@slammghana.com" className="hover:underline">info@slammghana.com</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="text-center">
            <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4 text-xl font-[EncodeSans]">
              <a href="https://www.facebook.com/Slammgh/" aria-label="Facebook" className="hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/slammgh" aria-label="Twitter" className="hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://gh.linkedin.com/company/slammghana" aria-label="LinkedIn" className="hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/slammgh/" aria-label="Instagram" className="hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
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