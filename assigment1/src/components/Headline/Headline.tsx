import Text from "../Text/Text";
import { StyledDiv, StyledBorder } from "./StyledHeadline";

function Headline(){
    return <StyledDiv>
        <Text fontSize="large" fontWeight="extraBold" lineHeight="high" color="lightBlack">Latest News</Text>
        <StyledBorder/>
        <StyledDiv>
            <Text fontSize="large" fontWeight="extraBold" lineHeight="high" color="lightBlack">Latest News</Text>
        </StyledDiv>
    </StyledDiv>
}
export default Headline;