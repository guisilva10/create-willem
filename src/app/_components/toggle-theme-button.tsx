"use client";

import { MoonStarIcon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/app/_components/ui/button";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const duration = 500;

  const toggleTheme = useCallback(async () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    if (!buttonRef.current) {
      setTheme(newTheme);
      return;
    }

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  }, [theme, setTheme, duration]);

  return (
    <div className="relative ml-2 border-border/60 pl-2">
      <Button
        ref={buttonRef}
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="relative size-9 rounded-lg border border-border/60 hover:bg-muted"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
        <MoonStarIcon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Alternar tema</span>
      </Button>
    </div>
  );
}
