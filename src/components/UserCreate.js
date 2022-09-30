import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const PostCreate = (props) => {
  return (
    <Create title={"Create new User"} {...props}>
      <SimpleForm>
        <TextInput source="name" />
        <TextInput multiline source="body" />
        {/* <DateInput /> */}
      </SimpleForm>
    </Create>
  );
};

export default PostCreate;
