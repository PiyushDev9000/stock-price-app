import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import React from "react";
import TradingWidgetChart from "@/components/TradingWidgetChart";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";

const Home = () => {
  const scriptUrl = `https://s3.tradingview.com/external-embedding/embed-widget-`;
  return (
    <div className="flex min-h-screen home-wrapper">
      <section className="grid w-full gap-8 home-section">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingWidgetChart
            title="Market Overview"
            scriptURL={`${scriptUrl}market-overview.js`}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            classname="custom-chart"
            height={600}
          />
        </div>

        <div className="md:col-span-1 xl:col-span-2">
          <TradingWidgetChart
            title="Stock Heatmap"
            scriptURL={`${scriptUrl}stock-heatmap.js`}
            config={HEATMAP_WIDGET_CONFIG}
            classname="custom-chart"
            height={600}
          />
        </div>
      </section>
      <section className="grid w-full gap-8 home-section">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingWidgetChart
            scriptURL={`${scriptUrl}timeline.js`}
            config={TOP_STORIES_WIDGET_CONFIG}
            height={600}
          />
        </div>

        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingWidgetChart
            scriptURL={`${scriptUrl}market-quotes.js`}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
