import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props) => {
  return (
    <Edit title={"Edit User"} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput label="Нэр" source="name" />
        <TextInput source="email" />
        <TextInput label="Утасны дугаар" source="phoneNumber" />
        <TextInput label="Үлдэгдэл" source="balance" />
        <TextInput label="Банкны нэр" source="prefferedBankAccount.bankName" />
        <TextInput label="Данс" source="prefferedBankAccount.bankAccount" />
        <TextInput source="isPriveleged" />
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
