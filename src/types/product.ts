export interface IProduct {
    id: number
    title: string
    description?: string
    category?:string
    price: number
    discountPercentage?:number
    rating?:number
    brand?:string
    sku?:string
    warrantyInformation?:string
    shippingInformation?:string
    thumbnail:string
    tags?:string[]
    images?:string[]
    reviews?: {
      rating: number;
      comment: string;
      reviewerName: string;
      reviewerEmail: string;
      date:string;
    }[];
  }