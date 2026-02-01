"use client";

import Link from "next/link";
import { RocketIcon } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { Badge } from "@/app/_components/ui/badge";
import { ToggleThemeButton } from "@/app/_components/toggle-theme-button";

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-foreground selection:text-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-6 md:p-12">
      <div className="bg-muted/20 pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[120px]" />

      <div className="absolute top-8 right-8">
        <ToggleThemeButton />
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-4 relative z-10 flex w-full max-w-4xl flex-col items-start gap-10 text-left duration-1000">
        <div className="flex flex-col items-start gap-4">
          <h1
            className="text-foreground text-4xl leading-tight font-bold tracking-tighter uppercase md:text-6xl"
            style={{
              fontFamily: "'Press Start 2P', 'Courier New', Courier, monospace",
              textShadow: "0 4px 20px rgba(0,0,0,0.1)",
            }}
          >
            Create Willem
          </h1>
          <Badge
            variant="secondary"
            className="bg-muted text-muted-foreground h-6 rounded-md border-none px-2 font-mono text-[10px]"
          >
            v1.0.0
          </Badge>
        </div>

        <div className="w-full space-y-8">
          <div className="space-y-4">
            <h2 className="max-w-2xl text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl">
              To get started, edit the{" "}
              <code className="bg-muted text-foreground border-border rounded-xl border px-2.5 py-1 font-mono text-[0.8em]">
                page.tsx
              </code>{" "}
              file.
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg font-medium italic opacity-80 md:text-xl">
              "Boilerplate introduction with Next.js, Next-Auth, Tanstack-Query,
              Prisma and Shadcn"
            </p>
          </div>

          <p className="text-muted-foreground/60 max-w-lg text-base font-medium">
            Looking for a starting point or more instructions? Head over to our{" "}
            <a
              href="https://github.com/guisilva10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground decoration-border underline-offset-4 transition-colors hover:underline"
            >
              Documentation
            </a>
            .
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full px-8 text-base font-semibold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Link href="/auth/sign-in">
              <RocketIcon className="mr-2 size-5 fill-current" />
              Get Started
            </Link>
          </Button>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
      `}</style>
    </main>
  );
}
