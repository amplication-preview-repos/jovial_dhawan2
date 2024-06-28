import * as graphql from "@nestjs/graphql";
import { TradeInsightResolverBase } from "./base/tradeInsight.resolver.base";
import { TradeInsight } from "./base/TradeInsight";
import { TradeInsightService } from "./tradeInsight.service";

@graphql.Resolver(() => TradeInsight)
export class TradeInsightResolver extends TradeInsightResolverBase {
  constructor(protected readonly service: TradeInsightService) {
    super(service);
  }
}
