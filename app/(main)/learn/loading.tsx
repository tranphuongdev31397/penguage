import { Loader } from "lucide-react";
import * as React from "react";

export interface LoadingPageProps {}

export default function LoadingPage(props: LoadingPageProps) {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Loader className="size-4 animate-spin" />
    </div>
  );
}
