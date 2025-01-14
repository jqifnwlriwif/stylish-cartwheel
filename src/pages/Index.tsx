import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { CategoryTabs } from "@/components/CategoryTabs";
import { ProductCard } from "@/components/ProductCard";

// This would come from your API
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    type: "Clothing",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    category: "Clothing",
    primaryColor: "text-gray-900",
    secondaryColor: "text-gray-500",
  },
  {
    id: 2,
    name: "Aviator Sunglasses",
    type: "Accessories",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800",
    category: "Glasses",
    primaryColor: "text-gray-900",
    secondaryColor: "text-gray-500",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    type: "Electronics",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800",
    category: "Speakers",
    primaryColor: "text-gray-900",
    secondaryColor: "text-gray-500",
  },
  {
    id: 4,
    name: "Signature Perfume",
    type: "Fragrance",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800",
    category: "Perfumes",
    primaryColor: "text-gray-900",
    secondaryColor: "text-gray-500",
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Clothing",
    "Glasses",
    "Speakers",
    "Promotions",
    "Perfumes",
  ];

  // Filter products based on active category
  const filteredProducts = MOCK_PRODUCTS.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="mb-8">
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              type={product.type}
              price={product.price}
              primaryColor={product.primaryColor}
              secondaryColor={product.secondaryColor}
            />
          ))}
        </div>

        {/* API Integration Point */}
        {/* 
        // Example of how to integrate with an API:
        const { data: products, isLoading } = useQuery({
          queryKey: ['products', activeCategory],
          queryFn: () => fetchProducts(activeCategory)
        });
        */}
      </main>
    </div>
  );
};

export default Index;