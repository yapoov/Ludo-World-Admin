import "./App.css";
import {
  Admin,
  Authenticated,
  CustomRoutes,
  Resource,
  useAuthenticated,
} from "react-admin";
import restProvider from "ra-data-simple-rest";
import UserList from "./components/UserList";
import OrderList from "./components/OrderList";
import UserCreate from "./components/UserCreate";
import UserEdit from "./components/UserEdit";
import authProvider from "./authProvider";
import { Route } from "react-router-dom";
import OrderEdit from "./components/OrderEdit";

import { FaUser, FaMoneyBill } from "react-icons/fa";
// import  from '@material-ui/core';

const myPage = () => {
  return <div>FACKYOU</div>;
};

function App() {
  return (
    <Admin
      authProvider={authProvider}
      requireAuth
      dataProvider={restProvider("https://localhost:7270/api")}
    >
      <Resource
        // icon={<FaUser />}
        // icon={}
        name="User"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
      <CustomRoutes>
        <Route
          path="/users"
          element={
            <Authenticated>
              <myPage />
            </Authenticated>
          }
        />
      </CustomRoutes>
      <Resource
        // icon={<FaMoneyBill />}
        name="Order"
        list={OrderList}
        edit={OrderEdit}
      />
    </Admin>
  );
}

export default App;
