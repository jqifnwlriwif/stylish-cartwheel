import { useState } from "react";
import { Facebook, Instagram, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const categories = [
    "All",
    "Clothing",
    "Glasses",
    "Speakers",
    "Promotions",
    "Perfumes",
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-semibold">Store</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("relative z-50 p-2", isOpen && "menu-open")}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col space-y-1.5">
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </div>
          </button>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white/90 backdrop-blur-xl transition-transform duration-300 ease-in-out transform",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm font-medium text-gray-500 uppercase">Categories</h2>
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="block text-2xl font-medium hover:text-gray-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {category}
                </a>
              ))}
            </div>

            <div className="space-y-4">
              <a
                href="#about"
                className="block text-2xl font-medium hover:text-gray-600 transition-colors"
              >
                Who We Are
              </a>
              <a
                href="#contact"
                className="block text-2xl font-medium hover:text-gray-600 transition-colors"
              >
                Contact Us
              </a>
            </div>

            <div className="pt-8 border-t">
              <div className="flex space-x-6 mb-4">
                <a
                  href="#instagram"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#facebook"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="#whatsapp"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm text-gray-500">
                © 2024-{currentYear} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};