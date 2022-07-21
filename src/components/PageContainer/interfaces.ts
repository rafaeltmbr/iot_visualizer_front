import { HTMLAttributes } from "react";

export interface IPageContainerProps extends HTMLAttributes<HTMLDivElement> {}

export interface IPageConfig {
  headerTitle: string;
}

export interface IPageContextValue {
  config: IPageConfig;
  setConfig: React.Dispatch<React.SetStateAction<IPageConfig>>;
}

export const defaultPageConfig: IPageConfig = {
  headerTitle: "",
};
