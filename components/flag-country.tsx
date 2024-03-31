import { cn } from "@/lib/utils";
import * as React from "react";
import ReactCountryFlag, { ReactCountryFlagProps } from "react-country-flag";

export default function FlagCountry({
  style,
  countryCode,
  className,
  ...rest
}: Omit<ReactCountryFlagProps, "svg">) {
  return (
    <ReactCountryFlag
      svg
      className={cn(
        " overflow-hidden rounded-md ring-[0.5px] ring-gray-300",
        className
      )}
      style={{
        width: "100%",
        height: "100%",
        ...style,
      }}
      countryCode={countryCode}
      {...rest}
    />
  );
}
