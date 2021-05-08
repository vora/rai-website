import { useState } from "react";
import originalUseResizeObserver from "use-resize-observer";

type PossibleWidths = "small" | "medium" | "large" | "xlarge";

export const useResizeObserver = () => {
  const [width, setWidth] = useState<PossibleWidths>();
  const breakpoints = {
    xlarge: 1500,
    large: 1024,
    medium: 640,
  };

  const { ref } = originalUseResizeObserver({
    onResize: ({ width: resizedWidth }) => {
      if (!resizedWidth) {
        return;
      }

      if (resizedWidth >= breakpoints.xlarge) {
        setWidth("xlarge");
      } else if (resizedWidth >= breakpoints.large) {
        setWidth("large");
      } else if (resizedWidth >= breakpoints.medium) {
        setWidth("medium");
      } else {
        setWidth("small");
      }
    },
  });

  return { ref, width };
};
