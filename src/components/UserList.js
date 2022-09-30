import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Нэр" source="name" />
        <TextField source="email" />
        <TextField label="Утасны дугаар" source="phoneNumber" />
        <TextField label="Үлдэгдэл" source="balance" />
        <TextField label="Банкны нэр" source="prefferedBankAccount.bankName" />
        <TextField label="Данс" source="prefferedBankAccount.bankAccount" />
        <TextField source="isPriveleged" />

        {/* <DateField source="createdAt" /> */}
        <EditButton basePath="/User" />
        <DeleteButton basePath="/User" />
      </Datagrid>
    </List>
  );
};
export default UserList;
