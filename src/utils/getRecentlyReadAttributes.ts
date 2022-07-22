import { IAttribute } from "../interfaces/attribute";
import { getRecentReadings } from "./getRecentReadings";

export const getRecentlyReadAttributes = (attributes: IAttribute[]) =>
  attributes
    .map((e) => ({ ...e, readings: getRecentReadings(e.readings) }))
    .sort((a, b) => (a.readings?.[0] < b.readings?.[0] ? 1 : -1));
