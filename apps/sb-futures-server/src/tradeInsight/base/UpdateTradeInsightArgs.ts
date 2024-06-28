/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TradeInsightWhereUniqueInput } from "./TradeInsightWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TradeInsightUpdateInput } from "./TradeInsightUpdateInput";

@ArgsType()
class UpdateTradeInsightArgs {
  @ApiProperty({
    required: true,
    type: () => TradeInsightWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TradeInsightWhereUniqueInput)
  @Field(() => TradeInsightWhereUniqueInput, { nullable: false })
  where!: TradeInsightWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TradeInsightUpdateInput,
  })
  @ValidateNested()
  @Type(() => TradeInsightUpdateInput)
  @Field(() => TradeInsightUpdateInput, { nullable: false })
  data!: TradeInsightUpdateInput;
}

export { UpdateTradeInsightArgs as UpdateTradeInsightArgs };