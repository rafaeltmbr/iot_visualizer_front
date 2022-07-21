import { IAttribute } from "../attribute";

export interface IDevice {
  id: string;
  name: string;
  description: string;
  secret: string;
  created_at: string;
  updated_at: string;
  attributes: IAttribute[];
}
