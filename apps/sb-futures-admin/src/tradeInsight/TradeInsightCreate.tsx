import * as React from "react";
import { Create, SimpleForm, CreateProps, NumberInput } from "react-admin";

export const TradeInsightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="averagePrice" source="averagePrice" />
        <NumberInput label="gainLoss" source="gainLoss" />
        <NumberInput step={1} label="totalVolume" source="totalVolume" />
      </SimpleForm>
    </Create>
  );
};
