import { IAttributeFormatting } from "./IAttributeFormatting";
import { IReading } from "../reading";

export const attributeTypes = <const>["number", "boolean", "text"];
export type AttributeType = typeof attributeTypes[number];

export interface IAttribute {
  id: string;
  device_id: string;
  name: string;
  type: AttributeType;
  formatting: IAttributeFormatting;
  created_at: string;
  updated_at: string;
  readings: IReading[];
}
