import instance from "./axios";
import {
  GET_PARTNERS_FAIL,
  LOAD,
  GET_PARTNER_SUCC,
  ADD_PARTNER_SUCC,
  ADD_PARTNER_FAIL,
  GET_PARTNERS_SUCC,
  GET_PARTNER_FAIL,
  EDIT_SUCC,
  EDIT_FALSE,
  DELETE_SUCC,
  DELETE_FALSE,
} from "../actionType/partner";

const token = localStorage.getItem("userAuth");

// get all partner
export const getPartners = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.get("/partner"); // http://localhost:3000/partner
    dispatch({ type: GET_PARTNERS_SUCC, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PARTNERS_FAIL, payload: error.response.data });
  }
};

// get partner by id
export const getPartner = (id) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.get(`/partner/${id}`); // http://localhost:3000/partner
    dispatch({ type: GET_PARTNER_SUCC, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_PARTNER_FAIL, payload: error.response.data });
  }
};

// add partner need authentification && go back to the list

export const addPartner = (newPartner) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.post("/partner/add", newPartner,{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    dispatch({ type: ADD_PARTNER_SUCC, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADD_PARTNER_FAIL, payload: error.response.data });
  }
};

// update partner need authentification && go back to the list

export const updatePartner = (id,newPartner) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.put(`/partner/update/${id}`, newPartner,{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    dispatch({ type: EDIT_SUCC, payload: res.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: EDIT_FALSE, payload: error.response.data });
  }
};

// delete partner need authentification && refresh list

export const deletePartner = (id) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await instance.delete(`/partner/delete/${id}`,{
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    });
    dispatch({ type: DELETE_SUCC, payload: res.data });
    dispatch(getPartners())
  } catch (error) {
    console.log(error);
    dispatch({ type: DELETE_FALSE, payload: error.response.data });
  }
};