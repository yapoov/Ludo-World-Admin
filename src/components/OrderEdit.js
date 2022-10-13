import React from "react";
import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";

const OrderEdit = (props) => {
  return (
    <Edit title={"Edit User"} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="amount" />
        <TextInput disabled source="type" />
        <TextInput disabled source="date" />
        <TextInput disabled source="userId" />
        <SelectInput
          source="status"
          choices={[
            { id: 0, name: "Pending" },
            { id: 1, name: "Completed" },
            { id: 2, name: "Cancelled" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default OrderEdit;
