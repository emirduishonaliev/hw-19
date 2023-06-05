export const actionTypesAuth = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

const initState = {
  email: "",
  password: "",
  isAuthorized: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypesAuth.LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
        isAuthorized: true,
      };
    case actionTypesAuth.LOGOUT:
      return initState;
    default:
      return state;
  }
};
