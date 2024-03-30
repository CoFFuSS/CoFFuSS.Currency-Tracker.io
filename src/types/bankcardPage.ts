export interface Currency {
  type: string;
  properties: {
    title: string;
    description: string;
  };
  geometry: {
    coordinates: [number, number];
    type: string;
  };
}

export interface BankCardPageState {
  lng: number;
  lat: number;
  zoom: number;
  searchQuery: string;
  currencies: Currency[];
  loading: boolean;
}
