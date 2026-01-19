export type User = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean | null;
  image: string;
  hashedPassword: string | null;
  createdAt: string;
  updatedAt: string;
  role: "ADMIN" | "USER";
  rating: number;
};

export type Review = {
  id: string;
  userId: string;
  productId: string;
  rating: number;
  comment: string;
  createdDate?: string;
  user?: User;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  image: string;
  reviews: Review[];
};
