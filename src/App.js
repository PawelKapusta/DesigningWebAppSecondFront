import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ErrorScreen from "./screens/ErrorScreen";
import Header from "./components/Header";
import { responsiveFontSizes } from "@mui/material/styles";
import { AuctionsContextProvider } from "./context/AuctionsContext";
import { SnackbarProvider } from "notistack";
import Footer from "./components/Footer";
import AuctionsScreen from "./screens/AuctionsScreen";
import ClosedAuctionsScreen from "./screens/ClosedAuctionsScreen";
import AddAuctionScreen from "./screens/AddAuctionScreen";
import AuctionDetailsScreen from "./screens/AuctionDetailsScreen";

const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const AppContextProvider = ({ children }) => (
    <AuctionsContextProvider>
      <SnackbarProvider maxSnack={5} variant="success" autoHideDuration={800}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </SnackbarProvider>
    </AuctionsContextProvider>
  );

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header />
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route exact path="/auctions" element={<AuctionsScreen />} />
              <Route exact path="/auctions/closed" element={<ClosedAuctionsScreen />} />
              <Route exact path="/auction/:id" element={<AuctionDetailsScreen />} />
              <Route path="/auctions/add" element={<AddAuctionScreen />} />
              <Route path="*" element={<ErrorScreen />} />
            </Routes>
            <Footer />
          </Box>
        </ThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
