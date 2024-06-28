import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TradeInsightShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="averagePrice" source="averagePrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gainLoss" source="gainLoss" />
        <TextField label="ID" source="id" />
        <TextField label="totalVolume" source="totalVolume" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
