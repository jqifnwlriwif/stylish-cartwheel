export interface Product {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  category?: string;
  primaryColor: string;
  secondaryColor: string;
}

// Simulated API call - in production, this would fetch from your actual API/database
export const fetchProducts = async (): Promise<Product[]> => {
  console.log('Fetching products from service layer');
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
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
};

export const fetchPromotionalProducts = async (): Promise<Product[]> => {
  console.log('Fetching promotional products from service layer');
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
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
};
