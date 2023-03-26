import {
  GET_PARTNERS_SUCC,
  GET_PARTNERS_FAIL,
  EDIT_SUCC,
  EDIT_FALSE,
  LOAD,
  GET_PARTNER_SUCC,
  GET_PARTNER_FAIL,
  ADD_PARTNER_SUCC,
  ADD_PARTNER_FAIL,
  DELETE_SUCC,
  DELETE_FALSE,
} from "../actionType/partner";

const initState = {
  partners: [],
  load: false,
  errors: null,
  edit: false,
  partner: null,
  msg: null,
};

export const partnerReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true, partner: null, partners: [] };
    case GET_PARTNERS_SUCC:
      return { ...state, load: true, partners: payload, msg: null };
    case GET_PARTNERS_FAIL:
      return { ...state, load: false, errors: payload };

    case GET_PARTNER_SUCC:
      return { ...state, load: false, partner: payload };
    case GET_PARTNER_FAIL:
      return { ...state, load: false, errors: payload };

    case ADD_PARTNER_SUCC:
      return { ...state, load: false, msg: "succ" };
    case ADD_PARTNER_FAIL:
      return { ...state, load: false, errors: payload };

    case DELETE_SUCC:
      return { ...state, load: false, msg: payload };
    case DELETE_FALSE:
      return { ...state, load: false, msg: payload };
      
    case EDIT_FALSE:
      return { ...state, msg: payload, partner: null };
    case EDIT_SUCC:
      return { ...state, msg: "succ", partner: null };

    default:
      return state;
  }
};

export default partnerReducer;
