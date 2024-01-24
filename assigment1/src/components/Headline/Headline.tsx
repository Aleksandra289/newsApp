import Text from "../Text/Text";
import { StyledDiv, StyledBorder } from "./StyledHeadline";

type HeadlineProps={
    title: string;
    titleBelow?: string
}

function Headline({title, titleBelow=title}: HeadlineProps){
    return <StyledDiv>
        <Text fontSize="large" fontWeight="extraBold" lineHeight="high" color="lightBlack">{title}</Text>
        <StyledBorder/>
        <StyledDiv>
            <Text fontSize="large" fontWeight="extraBold" lineHeight="high" color="lightBlack">{titleBelow}</Text>
        </StyledDiv>
    </StyledDiv>
}
export default Headline;