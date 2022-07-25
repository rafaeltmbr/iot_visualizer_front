import { AttributeType } from "../interfaces/attribute";
import {
  IAttributeFormatting,
  TextTransformation,
} from "../interfaces/attribute/IAttributeFormatting";

const removeExtraSpaces = (text: string) =>
  text
    .replace(/[\s]/g, " ")
    .split(" ")
    .filter((word) => word)
    .join(" ");

const formatNumber = (format: IAttributeFormatting, value: string) => {
  if (!format.number) return value;

  return `${format.number.preffix || ""}${value}${format.number.suffix || ""}`;
};

const formatBoolean = (format: IAttributeFormatting, value: string) => {
  if (!format.boolean) return value;

  return value === "true"
    ? format.boolean.true_text
    : format.boolean.false_text;
};

const textTransformers: Record<TextTransformation, (text: string) => string> = {
  none: (text) => text,
  lowercase: (text) => text.toLocaleLowerCase(),
  uppercase: (text) => text.toLocaleUpperCase(),
};

const formatText = (format: IAttributeFormatting, value: string) => {
  if (!format.text) return value;

  const transformer = textTransformers[format.text.transform];

  return transformer ? transformer(value) : value;
};

const formatters: Record<
  AttributeType,
  (format: IAttributeFormatting, text: string) => string
> = {
  number: formatNumber,
  boolean: formatBoolean,
  text: formatText,
};

export const formatReading = (
  type: AttributeType,
  format: IAttributeFormatting,
  value: string
) => {
  const formatter = formatters[type];

  return removeExtraSpaces(formatter ? formatter(format, value) : value);
};
