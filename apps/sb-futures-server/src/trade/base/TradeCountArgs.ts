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
import { TradeWhereInput } from "./TradeWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class TradeCountArgs {
  @ApiProperty({
    required: false,
    type: () => TradeWhereInput,
  })
  @Field(() => TradeWhereInput, { nullable: true })
  @Type(() => TradeWhereInput)
  where?: TradeWhereInput;
}

export { TradeCountArgs as TradeCountArgs };
