import { StyledPageShellDiv } from "./StyledPageShell";

type PageShellType={
    children: React.ReactNode
}

function PageShell({children}: PageShellType){
    return <StyledPageShellDiv>{children}</StyledPageShellDiv>
}
export default PageShell;