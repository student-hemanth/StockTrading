import React, { useState } from "react";
import TradeActionWindow from "./TradeActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: () => {},
  openSellWindow: () => {},
  closeTradeWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
  const [isTradeWindowOpen, setIsTradeWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedTradeMode, setSelectedTradeMode] = useState("BUY");

  const handleOpenBuyWindow = (uid) => {
    setSelectedStockUID(uid);
    setSelectedTradeMode("BUY");
    setIsTradeWindowOpen(true);
  };

  const handleOpenSellWindow = (uid) => {
    setSelectedStockUID(uid);
    setSelectedTradeMode("SELL");
    setIsTradeWindowOpen(true);
  };

  const handleCloseTradeWindow = () => {
    setSelectedStockUID("");
    setIsTradeWindowOpen(false);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeTradeWindow: handleCloseTradeWindow,
      }}
    >
      {children}

      {isTradeWindowOpen && (
        <TradeActionWindow uid={selectedStockUID} mode={selectedTradeMode} />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;