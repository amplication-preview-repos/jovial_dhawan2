import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TradeInsightService } from "./tradeInsight.service";
import { TradeInsightControllerBase } from "./base/tradeInsight.controller.base";

@swagger.ApiTags("tradeInsights")
@common.Controller("tradeInsights")
export class TradeInsightController extends TradeInsightControllerBase {
  constructor(protected readonly service: TradeInsightService) {
    super(service);
  }
}
