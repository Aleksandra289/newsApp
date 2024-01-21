import { ThemeColor } from "../../shared/theme/theme";
import { IconSizes } from "../../shared/theme/theme";
import { StyleIconWrapperDiv } from "./StyledIconWrapper";

type IconWrapperProps = {
    icon: React.ComponentType<{ size: IconSizes; color: ThemeColor }>; 
    size: IconSizes;
    color: ThemeColor;
  };
  
  function IconWrapper({ icon: IconComponent, size, color }: IconWrapperProps) {
    return <StyleIconWrapperDiv><IconComponent size={size} color={color} /></StyleIconWrapperDiv>;
  }
  
  export default IconWrapper;