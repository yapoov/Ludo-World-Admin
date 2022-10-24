import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  RichTextField,
  FilterButton,
  TopToolbar,
  ReferenceField,
} from "react-admin";

const OrderList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <ReferenceField source="userId" reference="User">
          <TextField source="phoneNumber"/>
        </ReferenceField>
        <TextField source="amount" />
        <TextField source="status" />
        <TextField source="type" />
        <TextField source="date" />
        <EditButton basePath="/User" />
        <DeleteButton basePath="/User" />
      </Datagrid>
    </List>
  );
};
export default OrderList;
