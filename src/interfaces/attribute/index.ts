import { IReading } from "../reading";

export interface IAttribute {
  id: string;
  device_id: string;
  name: string;
  type: string;
  formatting: string;
  created_at: string;
  updated_at: string;
  readings: IReading[];
}
