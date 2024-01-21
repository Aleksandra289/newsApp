import { StyledCard } from "./StyledCard";

type CardProps={
    children: React.ReactNode;
}

function Card({children}: CardProps){
    return <StyledCard>{children}</StyledCard>
}
export default Card;