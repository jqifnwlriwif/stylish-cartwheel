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
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="glass-card absolute inset-x-0 bottom-0 p-4 translate-y-0 transition-transform duration-300">
        <h3 className={`font-medium ${primaryColor}`}>{name}</h3>
        <p className={`text-sm ${secondaryColor}`}>{type}</p>
        <p className={`mt-1 font-medium ${primaryColor}`}>
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};