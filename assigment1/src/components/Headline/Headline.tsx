import Text from "../Text/Text";
import { StyledDiv, StyledBorder } from "./StyledHeadline";

type HeadlineProps={
    title: string;
    isAddedLineBelow?: boolean
}

function Headline({title, isAddedLineBelow=true}: HeadlineProps){
    return <StyledDiv>
        <Text fontSize="large" fontWeight="extraBold" lineHeight="high" color="lightBlack">{title}</Text>
        <StyledBorder/>
        <StyledDiv>
            { isAddedLineBelow && <Text fontSize="large" fontWeight="extraBold" lineHeight="high" color="lightBlack">{title}</Text>}
        </StyledDiv>
    </StyledDiv>
}
export default Headline;