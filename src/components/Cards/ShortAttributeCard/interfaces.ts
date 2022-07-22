import { HTMLAttributes } from "react";
import { IAttribute } from "../../../interfaces/attribute";

export interface IAttributeCardProps extends HTMLAttributes<HTMLDivElement> {
  attribute: IAttribute;
}
