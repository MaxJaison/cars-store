import { FiltersActionTypes, CHANGE_MANUFACTURE } from "../types";

export default function manufactures(state = "", action: FiltersActionTypes) {
  switch (action.type) {
    case CHANGE_MANUFACTURE:
      return action.payload;
    default:
      return state;
  }
}
