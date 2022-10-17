import {
  AUTH_GET_PERMISSIONS,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
} from "react-admin";

const authProvider = {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    console.log(JSON.stringify({ username, password }));
    const request = new Request(
      "https://ludoworldwithrealmoneyapi.azurewebsites.net/api/AdminAuth",
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    );

    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }

        localStorage.setItem("username", username);
        return response.json();
      })
      .then((auth) => {
        localStorage.setItem("permissions", auth.role);
        localStorage.setItem("auth", JSON.stringify(auth));
        return Promise.resolve();
      })
      .catch(() => {
        throw new Error("Network error");
      });
  },
  // called when the user clicks on the logout button
  logout: () => {
    localStorage.removeItem("username");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};

export default authProvider;
