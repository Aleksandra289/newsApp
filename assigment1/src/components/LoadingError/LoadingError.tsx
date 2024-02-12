import DataStatus from "../DataStatus/DataStatus";
import LoadingErrorIcon from "../../icons/LoadingErrorIcon";
import { useNavigate } from "react-router";
import { routes } from "../../Router/routes";
import { LoadingWrapper } from "./StyledLoadingError";

export default function LoadingError() {
  const navigate = useNavigate();
  function onClickHandler() {
    navigate(routes.root);
  }
  return (
    <LoadingWrapper>
      <DataStatus
        title="Something went wrong!"
        description="An error occurred while attempting to retrieve data from the server."
        buttonText="Back home"
        icon={LoadingErrorIcon}
        onClick={onClickHandler}
      />
    </LoadingWrapper>
  );
}
