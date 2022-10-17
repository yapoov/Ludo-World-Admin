import "./App.css";
import {
  Admin,
  Authenticated,
  CustomRoutes,
  Resource,
  useAuthenticated,
  usePermissions,
} from "react-admin";
import restProvider from "ra-data-simple-rest";
import UserList from "./components/UserList";
import OrderList from "./components/OrderList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import authProvider from "./authProvider";
import { Route } from "react-router-dom";
import OrderEdit from "./components/OrderEdit";

import UserIcon from "@mui/icons-material/Group";
import OrderIcon from "@mui/icons-material/Book";
// import  from '@material-ui/core';
import { Card, CardContent, CardHeader } from "@mui/material";

const myPage = () => {
  return <div>FACKYOU</div>;
};

function App() {
  return (
    <Admin
      // dashboard={Dashboard}
      authProvider={authProvider}
      requireAuth
      dataProvider={restProvider(
        "https://ludoworldwithrealmoneyapi.azurewebsites.net/api"
      )}
    >
      <Resource
        name="User"
        icon={UserIcon}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
        recordRepresentation="phoneNumber"
      />

      <Resource
        icon={OrderIcon}
        name="Order"
        list={OrderList}
        edit={OrderEdit}
      />
    </Admin>
  );
}

const Dashboard = () => (
  <Card>
    <CardHeader title="Welcome to the administration" />
    <CardContent>Lorem ipsum sic dolor amet...</CardContent>
  </Card>
);

export default App;
