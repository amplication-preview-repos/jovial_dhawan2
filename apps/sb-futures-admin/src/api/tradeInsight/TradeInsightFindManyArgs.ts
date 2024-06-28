import { TradeInsightWhereInput } from "./TradeInsightWhereInput";
import { TradeInsightOrderByInput } from "./TradeInsightOrderByInput";

export type TradeInsightFindManyArgs = {
  where?: TradeInsightWhereInput;
  orderBy?: Array<TradeInsightOrderByInput>;
  skip?: number;
  take?: number;
};
