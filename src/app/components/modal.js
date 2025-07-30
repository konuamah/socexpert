
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Search, Shield, RefreshCw, X, Phone, Mail, Twitter, Linkedin, Instagram, Copy } from "lucide-react";

// Reusable Contact Modal Component
export const ContactModal = ({ 
  isOpen, 
  onClose, 
  contactInfo = {
    phones: ["+233 (0) 552280177", "+233 (0) 546875600"],
    email: "info@slammghana.com",
    social: [
      { name: "Twitter", url: "https://twitter.com/slammgh", icon: Twitter },
      { name: "LinkedIn", url: "https://gh.linkedin.com/company/slammghana", icon: Linkedin },
      { name: "Instagram", url: "https://www.instagram.com/slammgh/", icon: Instagram }
    ]
  },
  title = "Get in Touch",
  subtitle = "Ready to secure your digital future? Contact us today."
}) => {
  const [copiedText, setCopiedText] = useState("");
  const modalRef = useRef(null);

  // Handle modal keyboard navigation and focus management
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(type);
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative p-6 border-b border-gray-100">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-900 text-center pr-8">
            {title}
          </h2>
          <p className="text-gray-600 text-center mt-2">
            {subtitle}
          </p>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Phone Numbers */}
          {contactInfo.phones && contactInfo.phones.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-600" />
                Call Us
              </h3>
              <div className="space-y-2">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                    <a
                      href={`tel:${phone.replace(/\s/g, '')}`}
                      className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      {phone}
                    </a>
                    <button
                      onClick={() => copyToClipboard(phone, `phone-${index}`)}
                      className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      aria-label={`Copy phone number ${phone}`}
                    >
                      {copiedText === `phone-${index}` ? (
                        <span className="text-green-600 text-sm font-medium">Copied!</span>
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Email */}
          {contactInfo.email && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-600" />
                Email Us
              </h3>
              <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
                <button
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  aria-label={`Copy email ${contactInfo.email}`}
                >
                  {copiedText === 'email' ? (
                    <span className="text-green-600 text-sm font-medium">Copied!</span>
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Social Media */}
          {contactInfo.social && contactInfo.social.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Follow Us
              </h3>
              <div className="flex justify-center space-x-4">
                {contactInfo.social.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 text-gray-600 hover:text-white bg-gray-100 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-400"
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Call to Action */}
          {contactInfo.email && (
            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm mb-4">
                Ready to discuss your cybersecurity needs?
              </p>
              <button
                onClick={() => {
                  window.location.href = `mailto:${contactInfo.email}?subject=Cybersecurity Consultation Request`;
                }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-400"
              >
                Send Email Now
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};