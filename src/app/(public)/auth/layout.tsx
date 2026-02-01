"use client";

import Beams from "@/app/_components/beams-background";
import { buttonVariants } from "@/app/_components/ui/button";
import { ArrowLeftIcon, DiamondIcon } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";

export default function Page({ children }: PropsWithChildren) {
  return (
    <div className="relative grid min-h-svh">
      <div className="absolute inset-0">
        <Beams
          beamWidth={3}
          beamHeight={20}
          beamNumber={20}
          speed={2}
          noiseIntensity={1.75}
          rotation={30}
          scale={0.2}
        />
      </div>
      <div className="relative flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-between gap-2">
          <div className="flex items-center space-x-2">
            <p className="size-12 text-white transition-all duration-300 border p-1 font-bold leading-tight flex items-center justify-center rounded-lg">
              CW
            </p>
          </div>
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            <ArrowLeftIcon className="size-4" />
            Back
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xl rounded-lg border bg-background p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
