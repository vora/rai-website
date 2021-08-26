import React from "react";
import * as Icons from "react-feather";
import { customIcons } from "./customIcons";

export type IconType = keyof typeof Icons | keyof typeof customIcons;

interface IconProps {
  readonly icon: IconType;
  readonly size?: "small" | "base" | "large" | "largest" | "humongous";
}

export function Icon({ icon, size = "base" }: IconProps) {
  const isCustomIcon = Object.keys(customIcons).includes(icon);

  const sizes = {
    small: 16,
    base: 24,
    large: 32,
    largest: 125,
    humongous: 200,
  };

  if (isCustomIcon) {
    const customIcon = customIcons[icon as keyof typeof customIcons];

    return (
      <svg
        width={sizes[size]}
        height={sizes[size]}
        viewBox={customIcon.viewbox}
        data-testid={`icon-${icon}`}
      >
        {customIcon.paths.map((path) => (
          <path key={path.d} d={path.d} />
        ))}
      </svg>
    );
  }

  const Element = Icons[icon as keyof typeof Icons];

  return <Element size={sizes[size]} data-testid={`icon-${icon}`} />;
}
