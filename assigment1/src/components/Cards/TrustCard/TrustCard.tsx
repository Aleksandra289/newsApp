import Card from "../Card/Card";
import { StyledTextDiv, StyledTitle, StyledDescription, StyledIconAndText } from "./StyledTrustCard";
import Text from "../../Text/Text";
import CircleIcon, { StatusProps } from "../../CircleIcon/CircleIcon";
type TrustCardProps={
  title: string;
  description: string,
  status?: StatusProps
}

function TrustCard({title, description, status="success", }: TrustCardProps){
 return <Card borderRadius="large" backgroundColor="mint" borderColor="green" padding='1rem'>
  <StyledIconAndText>
  <CircleIcon status={status}></CircleIcon>
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