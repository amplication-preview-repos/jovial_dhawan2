import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TradeWhereInput = {
  id?: StringFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
  symbolField?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  tradeDate?: DateTimeNullableFilter;
  tradeType?: "Option1";
};
