// TradingViewWidget.jsx
"use client";
import useTradingViewWidget from "@/Hooks/useTradingWidget";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  scriptURL: string;
  config: Record<string, unknown>;
  height?: number;
  classname?: string;
}

const TradingViewWidget = ({
  title,
  scriptURL,
  config,
  height = 600,
  classname,
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewWidget(scriptURL, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", classname)}
        ref={containerRef}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
