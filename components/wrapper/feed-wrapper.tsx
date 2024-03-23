import * as React from "react";

export interface FeedWrapperProps {
  children: React.ReactNode;
}

export function FeedWrapper({ children }: FeedWrapperProps) {
  return <div className="relative flex-1 top-0 pb-6 md:pb-10 ">{children}</div>;
}
