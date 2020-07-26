export interface Product {
  id: string;
  name: string;
  prices: Price[];
  isLiked?: boolean;
}

export interface Brand {
  name: string;
  id: string;
}

export interface Price {
  price: number;
  url: string;
  site: string;
  currency?: string;
}

export interface CreateAccountRequest {
  name: string;
  username: string;
  password: string;
  email: string;
}
