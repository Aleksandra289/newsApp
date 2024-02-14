import { LoadingWrapper } from "../../pages/Home/StyledHome";
import PuffLoader from "react-spinners/PuffLoader";
import DataStatus from "../DataStatus/DataStatus";
import LoadingErrorIcon from "../../icons/LoadingErrorIcon";
type PageStateContainerProps = {
  isLoading?: boolean;
  isError?: boolean;
  onClickHandler: () => void;
};

export default function PageStateContainer({
  isLoading = false,
  isError = false,
  onClickHandler
}: PageStateContainerProps) {
  if (isLoading)
    return (
      <LoadingWrapper>
        <PuffLoader />
      </LoadingWrapper>
    );
  if (isError)
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
