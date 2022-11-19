import { useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("dark");
  return [theme, setTheme];
};
