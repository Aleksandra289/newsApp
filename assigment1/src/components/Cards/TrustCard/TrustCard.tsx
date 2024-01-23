import Card from "../Card/Card";
import { StyledTextDiv, StyledTitle, StyledDescription, StyledIconAndText } from "./StyledTrustCard";
import Text from "../../Text/Text";
type TrustCardProps={
  title: string;
  description: string
}

function TrustCard({title, description}: TrustCardProps){
 return <Card borderRadius="large" backgroundColor="mint" borderColor="green" padding='1rem'>
  <StyledIconAndText>
    <StyledTextDiv>
      <StyledTitle>
         <Text fontSize="medium" fontWeight="extraBold" lineHeight="medium" color="lighterBlack">{title}</Text>
      </StyledTitle>
     <StyledDescription>
         <Text fontSize="small" fontWeight="regular" lineHeight="low" color="lighterGray">{description}</Text>
     </StyledDescription>
   </StyledTextDiv>
  </StyledIconAndText> 
 </Card>
}
export default TrustCard;