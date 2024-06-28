import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type TradeInsightWhereInput = {
  averagePrice?: FloatNullableFilter;
  gainLoss?: FloatNullableFilter;
  id?: StringFilter;
  totalVolume?: IntNullableFilter;
};
