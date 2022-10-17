import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  CreateButton,
  DeleteButton,
  TextInput,
  ReferenceInput,
  SearchInput,
  BooleanField,
  EmailField,
  NumberField,
  usePermissions,
} from "react-admin";

const postFilters = [
  <SearchInput source="q" alwaysOn />,
  <TextInput label="priveleged" source="isPriveleged" defaultValue="true" />,
];

const UserList = (props) => {
  const { permissions } = usePermissions();
  return (
    <List filters={postFilters} {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField label="Нэр" source="name" />
        <EmailField source="email" />
        <NumberField label="Утасны дугаар" source="phoneNumber" />
        <TextField label="Үлдэгдэл" source="balance" />
        <TextField label="Банкны нэр" source="prefferedBankAccount.bankName" />
        <TextField label="Данс" source="prefferedBankAccount.bankAccount" />
        {permissions === "admin" && <BooleanField source="isPriveleged" />}
        <EditButton basePath="/User" />
        {permissions === "admin" && <DeleteButton basePath="/User" />}
      </Datagrid>
    </List>
  );
};
export default UserList;
