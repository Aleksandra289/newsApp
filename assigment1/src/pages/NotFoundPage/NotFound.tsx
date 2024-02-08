import DataStatus from "../../components/DataStatus/DataStatus";
import Error404Icon from "../../icons/Error404Icon";
import { useNavigate } from "react-router-dom";
import { routes } from "../../Router/routes";
import { PageWrapper } from "../StyledNotFound";

export default function NotFound() {
  const navigate = useNavigate();

  function onClickButtonHandler() {
    navigate(routes.root);
  }
  return (
    <PageWrapper>
      <DataStatus
        title="Page not found!"
        description="We apologize for the inconvenience, but it appears that the page you are attempting to access is currently unavailable. This might be due to a temporary technical issue or an outdated link."
        buttonText="Back home"
        icon={Error404Icon}
        onClick={onClickButtonHandler}
      />
    </PageWrapper>
  );
}
