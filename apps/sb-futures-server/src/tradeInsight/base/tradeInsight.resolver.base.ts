/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { TradeInsight } from "./TradeInsight";
import { TradeInsightCountArgs } from "./TradeInsightCountArgs";
import { TradeInsightFindManyArgs } from "./TradeInsightFindManyArgs";
import { TradeInsightFindUniqueArgs } from "./TradeInsightFindUniqueArgs";
import { CreateTradeInsightArgs } from "./CreateTradeInsightArgs";
import { UpdateTradeInsightArgs } from "./UpdateTradeInsightArgs";
import { DeleteTradeInsightArgs } from "./DeleteTradeInsightArgs";
import { TradeInsightService } from "../tradeInsight.service";
@graphql.Resolver(() => TradeInsight)
export class TradeInsightResolverBase {
  constructor(protected readonly service: TradeInsightService) {}

  async _tradeInsightsMeta(
    @graphql.Args() args: TradeInsightCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [TradeInsight])
  async tradeInsights(
    @graphql.Args() args: TradeInsightFindManyArgs
  ): Promise<TradeInsight[]> {
    return this.service.tradeInsights(args);
  }

  @graphql.Query(() => TradeInsight, { nullable: true })
  async tradeInsight(
    @graphql.Args() args: TradeInsightFindUniqueArgs
  ): Promise<TradeInsight | null> {
    const result = await this.service.tradeInsight(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => TradeInsight)
  async createTradeInsight(
    @graphql.Args() args: CreateTradeInsightArgs
  ): Promise<TradeInsight> {
    return await this.service.createTradeInsight({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => TradeInsight)
  async updateTradeInsight(
    @graphql.Args() args: UpdateTradeInsightArgs
  ): Promise<TradeInsight | null> {
    try {
      return await this.service.updateTradeInsight({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => TradeInsight)
  async deleteTradeInsight(
    @graphql.Args() args: DeleteTradeInsightArgs
  ): Promise<TradeInsight | null> {
    try {
      return await this.service.deleteTradeInsight(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}