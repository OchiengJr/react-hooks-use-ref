import React from "react";
import CounterState from "./CounterState";
import CounterRef from "./CounterRef";
import Ticker from "./Ticker";
import Box from "./Box";
import TickerChart from "./TickerChart";

function App() {
  return (
    <div>
      <CounterState />
      <CounterRef />
      <Ticker />
      <Box />
      <TickerChart />
    </div>
  );
}

export default App;
