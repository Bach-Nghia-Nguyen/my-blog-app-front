import { INIT_STATE } from "../../constants";
import { getType, showModal, hideModal } from "../actions";

export default function modalReducers(state = INIT_STATE.modal, action) {
  const { type } = action;

  switch (type) {
    case getType(showModal): // case 'getPostsRequest'
      return {
        isShow: true,
      };

    case getType(hideModal): // case 'getPostsRequest'
      return {
        isShow: false,
      };

    default:
      return state;
  }
}
