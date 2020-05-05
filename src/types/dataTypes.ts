export interface Product {
  name: string;
  prices: Price[]
  isLiked?: boolean;
}

export interface Price {
  price: number;
  url: string;
  site: string;
  currency?: string
}


export interface CreateAccountRequest {
  name: string;
  username: string;
  password: string;
  email: string;
}
