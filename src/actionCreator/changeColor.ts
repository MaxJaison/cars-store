import { FiltersActionTypes, CHANGE_COLOR } from "../types";

export default function changeColor(color: string): FiltersActionTypes {
  return { type: CHANGE_COLOR, payload: color };
}
