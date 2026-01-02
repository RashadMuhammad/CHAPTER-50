
export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  imageUrl: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string[];
}
