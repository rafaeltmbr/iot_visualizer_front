import { IAttributeFormatting } from "./IAttributeFormatting";

export const attributeLayouts = <const>["short", "long"];
export type AttributeLayout = typeof attributeLayouts[number];

export interface IAttributeMetaData {
  layout: AttributeLayout;
  index: number;
  formatting: IAttributeFormatting;
}
