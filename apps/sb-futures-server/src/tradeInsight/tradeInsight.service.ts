import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TradeInsightServiceBase } from "./base/tradeInsight.service.base";

@Injectable()
export class TradeInsightService extends TradeInsightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
