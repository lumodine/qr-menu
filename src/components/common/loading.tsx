import {Loader2} from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center p-2">
      <Loader2 className="w-6 h-6 animate-spin text-primary" />
    </div>
  );
};

Loading.displayName = "Loading";

export {Loading};
