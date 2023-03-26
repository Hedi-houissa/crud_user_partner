import {
  LOAD,
  GET_USERS_SUCC,
  GET_USERS_FAIL,
  EDIT_SUCC,
  EDIT_FALSE,
  GET_USER_SUCC,
  GET_USER_FAIL,
  ADD_USER_SUCC,
  ADD_USER_FAIL,
  LOGOUT
} from "../actionType/user";

const initState = {
  users: [],
  load: false,
  errors: null,
  edit: false,
  user: null,
  msg: "",
  token: null,
};

export const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };

    case GET_USERS_SUCC:
      return { ...state, load: false, users: payload };
    case GET_USERS_FAIL:
      return { ...state, load: false, errors: payload };

    case GET_USER_SUCC:
      return { ...state, load: false, user: payload  };
    case GET_USER_FAIL:
      return { ...state, load: false, errors: payload };

    case EDIT_SUCC:
      return { ...state, load: false, msg: payload };
    case EDIT_FALSE:
      return { ...state, load: false, msg: payload };

    case ADD_USER_SUCC:
      return { ...state, load: false, token: payload };
    case ADD_USER_FAIL:
      return { ...state, load: false, msg: payload };

    case LOGOUT:
      return { ...state, load: false, token: null, user: null };

    default:
      return state;
  }
};

export default userReducer;
