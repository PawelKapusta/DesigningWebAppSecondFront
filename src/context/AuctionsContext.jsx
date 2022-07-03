import React, { useState } from "react";
import { http } from "../api/axios";

const defaultState = {
  auctions: [],
};

export const AuctionsContext = React.createContext(defaultState);

export const fetchAuctions = async () => {
  return http.get(`/auction/not/closed`);
};

export const fetchClosedAuctions = async () => {
  return http.get(`/auction/closed`);
};

export const createAuction = async data => {
  return http.post(`/auction`, data);
};

export const createOffer = async (id, data) => {
  return http.post(`/offer/${id}`, data);
};

export const fetchAuctionData = async id => {
  return http.get(`/auction/${id}`);
};

export const AuctionsContextProvider = ({ children }) => {
  const [auctions, setAuctions] = useState([]);
  const [closedAuctions, setClosedAuctions] = useState([]);
  const [auction, setAuction] = useState({});

  const providerValue = {
    auctions,
    setAuctions,
    closedAuctions,
    setClosedAuctions,
    auction,
    setAuction,
  };

  return <AuctionsContext.Provider value={providerValue}>{children}</AuctionsContext.Provider>;
};
