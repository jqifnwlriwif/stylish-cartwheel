import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

const PROMOTIONAL_PRODUCTS = [
  {
    id: 1,
    name: "Summer Collection",
    type: "Limited Edition",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
    primaryColor: "text-purple-600",
    secondaryColor: "text-purple-400",
  },
  {
    id: 2,
    name: "Exclusive Sunglasses",
    type: "Special Offer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800",
    primaryColor: "text-purple-600",
    secondaryColor: "text-purple-400",
  },
  {
    id: 3,
    name: "Premium Speaker",
    type: "New Arrival",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800",
    primaryColor: "text-purple-600",
    secondaryColor: "text-purple-400",
  },
];

export const PromotionalProducts = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-4 text-purple-600">Special Offers</h2>
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <motion.div 
          className="flex space-x-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {PROMOTIONAL_PRODUCTS.map((product) => (
            <motion.div
              key={product.id}
              className="min-w-[300px]"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};