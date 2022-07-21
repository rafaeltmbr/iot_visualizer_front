import { HTMLAttributes } from "react";

import { OptionClickHandler } from "../OptionsMenu/interfaces";

export interface ISurfaceCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  titleHighlight?: boolean;
  options?: string[];
  onOptionClick?: OptionClickHandler;
}
