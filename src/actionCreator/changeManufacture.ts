import { FiltersActionTypes, CHANGE_MANUFACTURE } from "../types";

export default function changeManufacture(
  manufacture: string
): FiltersActionTypes {
  return { type: CHANGE_MANUFACTURE, payload: manufacture };
}
