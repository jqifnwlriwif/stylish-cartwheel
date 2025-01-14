import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  name: string;
  type: string;
  price: number;
  primaryColor?: string;
  secondaryColor?: string;
}

export const ProductCard = ({
  image,
  name,
  type,
  price,
  primaryColor = "text-primary",
  secondaryColor = "text-muted-foreground",
}: ProductCardProps) => {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="aspect-square overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          loading="lazy"
        />
      </div>
      <motion.div
        className="glass-card absolute inset-x-0 bottom-0 p-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h3 className={`font-medium ${primaryColor}`}>{name}</h3>
        <p className={`text-sm ${secondaryColor}`}>{type}</p>
        <p className={`mt-1 font-medium ${primaryColor}`}>
          ${price.toFixed(2)}
        </p>
      </motion.div>
    </motion.div>
  );
};