import * as React from "react";
import { Edit, SimpleForm, EditProps, NumberInput } from "react-admin";

export const TradeInsightEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="averagePrice" source="averagePrice" />
        <NumberInput label="gainLoss" source="gainLoss" />
        <NumberInput step={1} label="totalVolume" source="totalVolume" />
      </SimpleForm>
    </Edit>
  );
};
