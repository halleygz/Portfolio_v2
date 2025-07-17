"use client";

import * as React from "react";
import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="absolute right-8 top-2 flex gap-2">
      {theme == "light" ? (
        <>
          <div onClick={() => setTheme("dark")}>
            <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-00 transition-all dark:scale-0" />
            <span className="sr-only">dark</span>
          </div>
          <div onClick={() => setTheme("system")}>
            <Laptop className="h-[1.2rem] w-[1.2rem] transition-all scale-100" />
            <span className="sr-only">system</span>
          </div>
        </>
      ) : (
        <>
          <div onClick={() => setTheme("light")}>
            <Sun className="h-[1.2rem] w-[1.2rem] scale-0 rotate-0 transition-all duration-750 dark:scale-100 dark:-rotate-90" />
            <span className="sr-only">Light</span>
          </div>
          <div onClick={() => setTheme("system")}>
            <Laptop className="h-[1.2rem] w-[1.2rem] transition-all scale-100" />
            <span className="sr-only">system</span>
          </div>
        </>
      )}
    </div>
  );
}
