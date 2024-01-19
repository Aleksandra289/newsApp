
type IconWrapperProps = {
    icon: React.ComponentType<{ size: string; color: string }>; 
    size: string;
    color: string;
  };
  
  function IconWrapper({ icon: IconComponent, size, color }: IconWrapperProps) {
    return <div><IconComponent size={size} color={color} /></div>;
  }
  
  export default IconWrapper;