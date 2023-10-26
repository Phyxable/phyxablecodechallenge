import { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

export default function useOrientation() {
  const [isDrawer, setIsDrawer] = useState(false);
  const [columns, setColums] = useState(1);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    setIsDrawer(width > height);
  }, [width, height]);

  useEffect(() => {
    if (!isDrawer) {
      setColums(1); // If not in drawer mode, set a single column
    } else if (width > 1440) {
      setColums(3); // If width is greater than 1440, use 3 columns
    } else if (width > 768) {
      setColums(2); // If width is greater than 768 but less than 1440, use 2 columns
    }
  }, [isDrawer, width]);

  return { isDrawer, columns };
}