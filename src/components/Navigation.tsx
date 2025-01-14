import { useState } from "react";
import { Facebook, Instagram, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const categories = [
    "All",
    "Clothing",
    "Glasses",
    "Speakers",
    "Promotions",
    "Perfumes",
  ];

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  const categoriesVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="fixed inset-0 bg-white/90 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-20">
              <div className="space-y-8">
                <div className="space-y-4">
                  <button
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="flex items-center justify-between w-full text-2xl font-medium hover:text-gray-600 transition-colors"
                  >
                    <span>Categories</span>
                    <motion.div
                      animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isCategoriesOpen && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={categoriesVariants}
                        className="overflow-hidden"
                      >
                        {categories.map((category) => (
                          <motion.a
                            key={category}
                            variants={itemVariants}
                            href={`#${category.toLowerCase()}`}
                            className="block text-xl pl-4 py-2 hover:text-gray-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {category}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div 
                  className="space-y-4"
                  variants={itemVariants}
                >
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
                </motion.div>

                <motion.div 
                  className="pt-8 border-t"
                  variants={itemVariants}
                >
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
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};