import { CheckCircle2Icon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

type props = {
    activityStatus : boolean
}

export const AlertAll = (activityStatus:props) => {
  return (
    <div className="grid w-full max-w-md items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>
          {activityStatus ? "Activity successful" : "Activity Failed"}
        </AlertTitle>
        <AlertDescription> {activityStatus ? "Activity successful" : "Activity Failed"}</AlertDescription>
      </Alert>
    </div>
  );
};
