export type TradeUpdateInput = {
  price?: number | null;
  quantity?: number | null;
  symbolField?: string | null;
  timestamp?: Date | null;
  tradeDate?: Date | null;
  tradeType?: "Option1" | null;
};
