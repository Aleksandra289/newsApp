import { StyledPageShell } from "./StyledPageShell";

type PageShellType = {
  children: React.ReactNode;
};

function PageShell({ children }: PageShellType) {
  return <StyledPageShell>{children}</StyledPageShell>;
}
export default PageShell;
