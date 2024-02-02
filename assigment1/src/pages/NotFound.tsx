import DataStatus from "../components/DataStatus/DataStatus";

export default function NotFound() {
  return (
    <DataStatus
      title="Page not found!"
      description="We apologize for the inconvenience, but it appears that the page you are attempting to access is currently unavailable. This might be due to a temporary technical issue or an outdated link."
      buttonText="Back home"
    />
  );
}
