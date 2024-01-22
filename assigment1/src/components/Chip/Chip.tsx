import { StyledCircle, StyledDiv} from './StyledChip'
import Text from '../Text/Text';

type ChipProps={
    children: string,
    showCircle?: boolean
}

function Chip({children, showCircle=true}: ChipProps){
    return <StyledDiv>
        <Text fontSize='small' fontWeight='semiBold' lineHeight='low'>{children}</Text>
        {showCircle && <StyledCircle/>}
    </StyledDiv>
}
export default Chip;