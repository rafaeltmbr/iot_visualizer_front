import { IReading } from "../interfaces/reading";

export const getRecentReadings = (readings: IReading[]) =>
  readings.sort((a, b) => (a.updated_at < b.updated_at ? 1 : -1));
