"use client";
import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@radix-ui/react-switch";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = React.useState(theme === "system");

  React.useEffect(() => {
    setIsDarkMode(theme === "dark");
  }, [theme]);

  const toggleMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Switch
      checked={isDarkMode}
      onCheckedChange={toggleMode}
      className={`relative inline-flex items-center ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      } h-6 rounded-full w-11 focus:outline-none focus:ring`}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        className={`${
          isDarkMode ? "translate-x-6 bg-gray-500" : "translate-x-1 bg-gray-400"
        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
      />
      <Moon
        className={`absolute left-1 w-4 h-4 ${isDarkMode ? "block" : "hidden"}`}
      />
      <Sun
        className={`absolute right-1 w-4 h-4 ${
          isDarkMode ? "hidden" : "block"
        }`}
      />
    </Switch>
  );
}
