import { TradeInsight as TTradeInsight } from "../api/tradeInsight/TradeInsight";

export const TRADEINSIGHT_TITLE_FIELD = "id";

export const TradeInsightTitle = (record: TTradeInsight): string => {
  return record.id?.toString() || String(record.id);
};
