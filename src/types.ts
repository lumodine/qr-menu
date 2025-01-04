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

export type Theme = {
  color: string;
};

export type TenantTheme = Theme & {
  font: string;
  headerPosition: HeaderPosition;
};

export type TenantBranch = {
  _id: string;
  translations: {
    _id: string;
    language: Language;
    title: string;
    description: string;
  }[];
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  createdAt: string;
  updateAt?: string;
};

export type TenantBranches = TenantBranch[];

export type Tenant = {
  _id: string;
  alias: string;
  name: string;
  theme: TenantTheme;
  languages: LanguageGroup[];
  currencies: CurrencyGroup[];
  logo?: string;
  background?: string;
  socialMedias: SocialMedia[];
  status: TenantStatus;
  createdAt: string;
  updateAt?: string;
  branches: TenantBranch[];
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
    title: string;
    description: string;
  }[];
  image: string;
  type: string;
  status: string;
  sort: number;
  theme?: Theme;
  createdAt: string;
  updateAt?: string;
};

export type Categories = Category[];

export type SubCategory = {
  _id: string;
  tenant: string;
  translations: {
    _id: string;
    language: Language;
    title: string;
    description: string;
  }[];
  status: string;
  sort: number;
  createdAt: string;
  updateAt?: string;
};

export type SubCategories = SubCategory[];

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
    title: string;
    description: string;
  }[];
  parentItems: any[];
  childItems: any[];
  prices: PriceGroup[];
  image: string;
  type: ProductType;
  status: ProductStatus;
  sort: number;
  createdAt: string;
  updateAt?: string;
};

export enum ProductType {
  CARD = "card",
  ROW = "row",
}

export enum ProductStatus {
  NOT_AVAILABLE = "not_available",
}

export type Products = Product[];

export type ProductVariant = {
  _id: string;
  tenant: string;
  translations: {
    _id: string;
    language: Language;
    title: string;
    description: string;
  }[];
  parentItems: any[];
  childItems: any[];
  prices: PriceGroup[];
  sort: number;
  createdAt: string;
  updateAt?: string;
};

export type ProductVariants = ProductVariant[];

export type Tag = {
  _id: string;
  tenant: string;
  translations: {
    _id: string;
    language: Language;
    title: string;
    description: string;
  }[];
  type: string;
  status: string;
  sort: number;
  theme?: Theme;
  createdAt: string;
  updateAt?: string;
};

export type Tags = Tag[];

export type Annannouncement = {
  _id: string;
  tenant: string;
  translations: {
    _id: string;
    language: Language;
    title: string;
    description: string;
  }[];
  status: string;
  sort: number;
  createdAt: string;
  updateAt?: string;
};

export type Annannouncements = Annannouncement[];

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

export enum HeaderPosition {
  TOP = "top",
  BOTTOM = "bottom",
}
