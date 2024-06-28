import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TradeInsightList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"TradeInsights"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="averagePrice" source="averagePrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="gainLoss" source="gainLoss" />
        <TextField label="ID" source="id" />
        <TextField label="totalVolume" source="totalVolume" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
