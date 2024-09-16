import { Transfer } from "../_models/transfer.model";

export const TRANSFER_TYPES = [
  'SHARED', 'PRIVATE', 'VIP'
]

export interface SearchFormData {
  pickupDateFrom: '';
  pickupDateTo: '';
  clientTitle: '';
  operatorTitle: '';
}

export interface TransferListDTO {
  transfers: Transfer[];
  totalSales: Number;
  totalNet: Number;
  totalCost: Number;
}

