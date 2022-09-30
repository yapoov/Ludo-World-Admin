import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const OrderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="userId" />
        <TextField source="amount" />
        <TextField source="status" />
        <TextField source="type" />
        <DateField source="date" />

        {/* <DateField source="createdAt" /> */}
        <EditButton basePath="/User" />
        <DeleteButton basePath="/User" />
      </Datagrid>
    </List>
  );
};
export default OrderList;
