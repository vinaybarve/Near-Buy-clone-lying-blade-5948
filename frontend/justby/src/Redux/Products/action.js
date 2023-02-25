import axios from "axios";
import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";
import BackendURL from "../../Backend"

const getProductRequestAction = () => {
  return { type: GET_PRODUCTS_REQUEST };
};

const getProductSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

const getProductFailureAction = () => {
  return { type: GET_PRODUCTS_FAILURE };
};

export const getProducts = (param) => (dispatch) => {
  dispatch(getProductRequestAction());

  axios
    .get(`${BackendURL}/restaurant/`, param) //--------------------------API------------->
    .then((res) => {
      console.log(res);
      dispatch(getProductSuccessAction(res.data));
    })
    .catch((err) => {
      dispatch(getProductFailureAction());
    });
};
