export interface ServicePackage {
  id: string;
  name: string;
  priceRange: string;
  features: string[];
  isRecommended?: boolean;
}

export interface ContactInfo {
  phone: string;
  email: string;
}
