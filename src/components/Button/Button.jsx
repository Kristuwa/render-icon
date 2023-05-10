import { ButtonElement } from "./Button.styled";

export const Button = ({ handleButtonClick, isLoading }) => {
  return (
    <ButtonElement
      type="button"
      onClick={handleButtonClick}
      disabled={isLoading}
    >
      Render icon
    </ButtonElement>
  );
};
