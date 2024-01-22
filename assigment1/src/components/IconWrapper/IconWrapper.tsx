import { ThemeColor } from "../../shared/theme/theme";
import { IconSizes } from "../../shared/theme/theme";
import { StyleIconWrapperDiv } from "./StyledIconWrapper";

type IconWrapperProps = {
    icon: React.ComponentType; 
    size: IconSizes;
    color: ThemeColor;
  };
  
  function IconWrapper({ icon: IconComponent, size, color }: IconWrapperProps) {
    return <StyleIconWrapperDiv size={size} color={color} ><IconComponent/></StyleIconWrapperDiv>;
  }
  
  export default IconWrapper;