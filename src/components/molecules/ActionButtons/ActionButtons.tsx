
import type { ActionButtonsProps } from "./ActionButtons.types";
import Button from "../../atoms/Button/Button";

const ActionButtons = ({
  primary,
  secondary,
  className = ""
}: ActionButtonsProps) => {
  return (
    <div className={`${className} flex gap-2`}>

      <Button variant="primary" size="w-2/4"{...primary}>
        {primary.children}
      </Button>

      <Button variant="secondary" size="w-2/4" {...secondary}>
        {secondary.children}
      </Button>

    </div>
  );
}

export default ActionButtons;