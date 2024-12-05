export type Response<TResponse> = {
  success: boolean;
  message: string;
  data: TResponse;
};

export type Currency = {
  _id: string;
  code: string;
  number: number;
  symbol: string;
  createdAt: string;
  updateAt?: string;
};

export type CurrencyGroup = {
  currency: Currency;
  isDefault: boolean;
  _id: string;
};

export type Language = {
  _id: string;
  name: string;
  shortName: string;
  culture: string;
  prefix: string;
  flag: string;
  direction: string;
  createdAt: string;
  updateAt?: string;
};

export type LanguageGroup = {
  language: Language;
  isDefault: boolean;
  _id: string;
};

export type Tenant = {
  _id: string;
  alias: string;
  name: string;
  theme: string;
  languages: LanguageGroup[];
  currencies: CurrencyGroup[];
  logo?: string;
  background?: string;
  socialMedias: SocialMedia[];
  status: TenantStatus;
  createdAt: string;
  updateAt?: string;
};

export enum TenantStatus {
  MAINTENANCE = "maintenance",
  PUBLISHED = "published",
}

export type SocialMedia = {
  type: SocialMediaType;
  value: string;
};

export enum SocialMediaType {
  INSTAGRAM = "instagram",
  X = "x",
  FACEBOOK = "facebook",
  YOUTUBE = "youtube",
  WEBSITE = "website",
}

export type Category = {
  _id: string;
  tenant: string;
  translations: {
    _id: string;
    language: Language;
    name: string;
    description: string;
  }[];
  image: string;
  type: string;
  status: string;
  sort: number;
  createdAt: string;
  updateAt?: string;
};

export type Categories = Category[];

export type PriceGroup = {
  currency: Currency;
  amount: number;
  _id: string;
};

export type Product = {
  _id: string;
  tenant: string;
  translations: {
    _id: string;
    language: Language;
    name: string;
    description: string;
  }[];
  category: Category;
  prices: PriceGroup[];
  image: string;
  type: ProductType;
  status: ProductStatus;
  sort: number;
  createdAt: string;
  updateAt?: string;
};

export enum ProductType {
  GRID = "grid",
  ROW = "row",
}

export enum ProductStatus {
  NOT_AVAILABLE = "not_available",
}

export type Products = Product[];

export type Messages = {
  [culture: string]: Message;
};

export type Message = {
  back_to_menu: string;
  page_not_found_title: string;
  page_not_found_description: string;
  page_not_found_cta_text: string;
  all_rights_reserved: string;
  maintenance_title: string;
  maintenance_description: string;
};
