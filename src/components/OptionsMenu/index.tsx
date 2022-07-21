import React, { useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

import { IOptionsMenuProps } from "./interfaces";
import {
  Container,
  Option,
  OptionsButton,
  OptionsContainer,
  Wrapper,
} from "./styles";

export const OptionsMenu: React.FC<IOptionsMenuProps> = ({
  options,
  onOptionClick,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: any, index: number) => {
    setShowMenu(false);
    onOptionClick(option, index);
  };

  const handleWrapperClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target !== wrapperRef.current) return;

    setShowMenu(false);
  };

  return (
    <Container>
      <OptionsButton onClick={() => setShowMenu(true)}>
        <FiMoreVertical />
      </OptionsButton>
      <Wrapper
        ref={wrapperRef}
        data-show={showMenu}
        onClick={handleWrapperClick}
      />
      <OptionsContainer data-show={showMenu}>
        {options.map((option, i) => (
          <Option
            key={`${i} = ${String(option)}`}
            onClick={() => handleOptionClick(option, i)}
          >
            {option}
          </Option>
        ))}
      </OptionsContainer>
    </Container>
  );
};
