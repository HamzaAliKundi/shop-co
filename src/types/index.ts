export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    discount?: number;
    image: string;
  }
  
  export interface PaginationType {
    currentPage: number;
    totalPages: number;
    total: number;
    perPage: number;
  }
  
  export type SortType = 'popular' | 'newest' | 'price-asc' | 'price-desc';