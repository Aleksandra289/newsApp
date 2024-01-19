import { StyledCard, StyledImage, StyledDescriptionDiv, StyledTitleDiv, StyledChipDiv } from "./StyledCard";
import Text from '../Text/Text';
import Chip from "../Chip/Chip";


type CardProps={
    src: string,
    title: string,
    description: string,
    chipText: string,
    isActive?: boolean
}

function Card({src, title, description, chipText, isActive=true}: CardProps){
    return <StyledCard src={src}>
        <StyledChipDiv>
        <Chip showCircle= {isActive}>{chipText}</Chip>
        </StyledChipDiv>
        
            <StyledImage src={src} alt="new pic"></StyledImage>   
            <StyledTitleDiv>
           <Text fontSize="large" fontWeight="bold" lineHeight="high">{title}</Text>
           </StyledTitleDiv>
           <StyledDescriptionDiv>
                <Text fontSize="medium" fontWeight="regular" lineHeight="medium">{description}</Text>
           </StyledDescriptionDiv>
            
    </StyledCard>
}
export default Card;