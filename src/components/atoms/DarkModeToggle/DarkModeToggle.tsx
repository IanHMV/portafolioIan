// src/components/atoms/DarkModeToggle/DarkModeToggle.tsx
import Icon, { type IconProps } from "../Icon/Icon"



export type DarkModeToggleProps = {
  className?: string;
  isDark: boolean;
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  onToggle: () => void;
}

const sun: IconProps = {
  name: "sun",
  size: 25,
  className: ""
}

const moon: IconProps = {
  name: "moon",
  size: 25,
  className: ""
}


const DarkModeToggle = ({
  className,
  isDark, 
  disabled,
  htmlType, 
  onToggle }: DarkModeToggleProps) => {
  return (
    <button 
    className={`${className??""}`}
    disabled={disabled}
    type={htmlType}
    onClick={onToggle}
    >
      {isDark ?<Icon {...sun} /> : <Icon {...moon} />}
    </button>
  )
}

export default DarkModeToggle