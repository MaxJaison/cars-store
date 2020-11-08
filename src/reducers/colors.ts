import { FiltersActionTypes, CHANGE_COLOR } from "../types";

export default function colors(state = "", action: FiltersActionTypes) {
  switch (action.type) {
    case CHANGE_COLOR:
      console.log(action);
      return action.payload;
    default:
      return state;
  }
}
