import { IReading } from "../reading";
import { IAttributeConfig } from "./IAttributeConfig";

export const attributeTypes = ["number", "boolean", "text"] as const;
export type AttributeType = typeof attributeTypes[number];

export interface IAttribute {
  id: string;
  device_id: string;
  name: string;
  type: AttributeType;
  config: IAttributeConfig;
  created_at: string;
  updated_at: string;
  readings: IReading[];
}
