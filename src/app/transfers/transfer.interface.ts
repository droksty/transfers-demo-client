export interface Transfer {
  id?: number;
  pickupDate: Date;
  pickupTime: Date;
  passengerName: string;
  pax: number;
  type: string;
  transferFrom: string;
  transferTo: string;
  priceTotal: number;
  priceNet: number;
  client?: Client;
  provider: Provider | null;
  providerCost: number;
}

export interface Client {
  id?: number;
  title?: string;
}

export interface Provider {
  id: number;
  name: string;
}
