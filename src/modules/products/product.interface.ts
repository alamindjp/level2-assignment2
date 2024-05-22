export type TTags = string;

export type TVariants = {
  type: string;
  value: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: [TTags];
  variants: [TVariants];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
