import instance from "./axios";
import {
  ADD_USER_FAIL,
  ADD_USER_SUCC,
  GET_USERS_FAIL,
  LOAD,
  GET_USERS_SUCC,
  GET_USER_SUCC,
  LOGOUT,
  EDIT_SUCC,
  EDIT_FALSE
} from "../actionType/user";

//  get all users
export const getUsers = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.get("/user");
    dispatch({ type: GET_USERS_SUCC, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_USERS_FAIL, payload: error.response.data });
  }
};

// register new user && login && save token && get profile
export const addUser = (newUser) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.post("/user/register", newUser);
    dispatch({ type: ADD_USER_SUCC, payload: res.data });
    dispatch(profile(res.data.token));
    localStorage.setItem("userAuth", JSON.stringify(res.data.token));
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_USER_FAIL, payload: error.response.data });
  }
};

// update user && update token && update redux
export const updateUser = (newUser,token) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.put(`/user/update/${newUser.id}`, newUser,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: EDIT_SUCC, payload: res.data });
    dispatch(login(newUser));
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_FALSE, payload: error.response.data });
  }
};

// login stock token in storage
export const login = (user) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.post("/user/login", user);
    dispatch({ type: ADD_USER_SUCC, payload: res.data });
    dispatch(profile(res.data.token));
    localStorage.setItem("userAuth", JSON.stringify(res.data.token));
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_USER_FAIL, payload: error.response.data });
  }
};

// get profile by token
export const profile = (token) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: GET_USER_SUCC, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_USER_FAIL, payload: error.response.data });
  }
};

// delete token && delete store
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userAuth");
    dispatch({ type: LOGOUT});
  
};
