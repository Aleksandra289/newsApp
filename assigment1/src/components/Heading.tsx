import { StyledHeading } from "./StyledHeading";
import { TypographyHeadingType, TypographyFontWeight } from "../shared/theme/theme";
type HeadingProps= {
    headingType: TypographyHeadingType,
    fontWeight: TypographyFontWeight,
    children: string
}

function Heading({headingType, fontWeight, children}: HeadingProps){
    return <StyledHeading headingType={headingType} fontWeight={fontWeight}>{children}</StyledHeading>
}
export default Heading;