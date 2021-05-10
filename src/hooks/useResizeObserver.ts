import { useState } from "react";
import originalUseResizeObserver from "use-resize-observer";

export const Breakpoints = {
  xlarge: 1500,
  large: 1024,
  medium: 640,
};

export const useResizeObserver = () => {
  const [width, setWidth] = useState<number>(0);

  const { ref } = originalUseResizeObserver({
    onResize: ({ width: resizedWidth }) => {
      if (!resizedWidth) {
        return;
      }

      if (resizedWidth >= Breakpoints.xlarge) {
        setWidth(Breakpoints.xlarge);
      } else if (resizedWidth >= Breakpoints.large) {
        setWidth(Breakpoints.large);
      } else if (resizedWidth >= Breakpoints.medium) {
        setWidth(Breakpoints.medium);
      } else {
        setWidth(0);
      }
    },
  });

  return { ref, width };
};
