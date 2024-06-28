import { Module } from "@nestjs/common";
import { TradeInsightModuleBase } from "./base/tradeInsight.module.base";
import { TradeInsightService } from "./tradeInsight.service";
import { TradeInsightController } from "./tradeInsight.controller";
import { TradeInsightResolver } from "./tradeInsight.resolver";

@Module({
  imports: [TradeInsightModuleBase],
  controllers: [TradeInsightController],
  providers: [TradeInsightService, TradeInsightResolver],
  exports: [TradeInsightService],
})
export class TradeInsightModule {}
