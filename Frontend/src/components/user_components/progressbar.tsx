"use client";
import { Card, ProgressBar } from "@tremor/react";

export default function ProgressBarUsageExample() {
  return (
    <>
      <Card className="mx-auto max-w-sm">
        <p className="text-tremor-default text-tremor-content  border-2 text-black flex items-center justify-between">
          <span>$9,012 &bull; 45%</span>
          <span>$20,000</span>
        </p>
        <div
          className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
          role="progressbar"
          aria-valuenow={25}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
            
          ></div>
        </div>
      </Card>
    </>
  );
}
