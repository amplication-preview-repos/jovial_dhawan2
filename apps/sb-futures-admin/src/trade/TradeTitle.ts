import { Trade as TTrade } from "../api/trade/Trade";

export const TRADE_TITLE_FIELD = "symbolField";

export const TradeTitle = (record: TTrade): string => {
  return record.symbolField?.toString() || String(record.id);
};
