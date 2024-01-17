import { StyledCircle, StyledDiv} from './StyledChip'
import Text from '../Text/Text';

type ChipProps={
    children: string
}

function Chip({children}: ChipProps){
    return <StyledDiv>
        <Text fontSize='small' fontWeight='semiBold' lineHeight='medium'>{children}</Text>
        <StyledCircle></StyledCircle>
    </StyledDiv>
}
export default Chip;