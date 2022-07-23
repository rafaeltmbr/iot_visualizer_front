import { IAttributeFormatting } from "./IAttributeFormatting";

export const attributeLayouts = ["short", "long"] as const;
export type AttributeLayout = typeof attributeLayouts[number];

export interface IAttributeConfig {
  layout: AttributeLayout;
  index: number;
  formatting: IAttributeFormatting;
}
