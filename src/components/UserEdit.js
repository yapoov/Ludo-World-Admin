import React from "react";
import {
  BooleanInput,
  Edit,
  SimpleForm,
  TextInput,
  usePermissions,
} from "react-admin";

const UserEdit = (props) => {
  const { permissions } = usePermissions();
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
        {permissions === "admin" && <BooleanInput source="isPriveleged" />}
      </SimpleForm>
    </Edit>
  );
};

export default UserEdit;
