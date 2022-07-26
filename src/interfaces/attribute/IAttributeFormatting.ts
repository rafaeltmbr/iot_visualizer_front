export interface INumberFormatting {
  preffix: string;
  suffix: string;
}

export interface IBooleanFormatting {
  true_text: string;
  false_text: string;
}

export const textTransformations = ["none", "lowercase", "uppercase"] as const;
export type TextTransformation = typeof textTransformations[number];

export interface ITextFormatting {
  transform: TextTransformation;
}

export interface IAttributeFormatting {
  number?: INumberFormatting;
  boolean?: IBooleanFormatting;
  text?: ITextFormatting;
}
