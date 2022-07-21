export type OptionClickHandler = (option: any, index: number) => void;

export interface IOptionsMenuProps {
  options: any[];
  onOptionClick: OptionClickHandler;
}
