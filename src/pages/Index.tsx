import { useState, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ProductCard } from "@/components/ProductCard";
import { PromotionalProducts } from "@/components/PromotionalProducts";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts, type Product } from "@/services/productService";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categoryTabsRef = useRef<HTMLDivElement>(null);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const scrollToCategory = (category: string) => {
    setActiveCategory(category);
    categoryTabsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Filter products based on active category
  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Navigation onCategoryClick={scrollToCategory} />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8" ref={categoryTabsRef}>
          <CategoryTabs
            categories={["All", "Clothing", "Glasses", "Speakers", "Promotions", "Perfumes"]}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <PromotionalProducts />

        <motion.div 
          className="product-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Index;