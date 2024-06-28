import { SortOrder } from "../../util/SortOrder";

export type TradeInsightOrderByInput = {
  averagePrice?: SortOrder;
  createdAt?: SortOrder;
  gainLoss?: SortOrder;
  id?: SortOrder;
  totalVolume?: SortOrder;
  updatedAt?: SortOrder;
};
