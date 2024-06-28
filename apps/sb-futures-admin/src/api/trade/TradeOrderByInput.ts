import { SortOrder } from "../../util/SortOrder";

export type TradeOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  quantity?: SortOrder;
  symbolField?: SortOrder;
  timestamp?: SortOrder;
  tradeDate?: SortOrder;
  tradeType?: SortOrder;
  updatedAt?: SortOrder;
};
