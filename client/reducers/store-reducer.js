import { data } from "../stores-data";
const INITIAL_STATE = { stores: data };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "persist/REHYDRATE":
      return { ...state, INITIAL_STATE };
    default:
      return state;
  }
}
