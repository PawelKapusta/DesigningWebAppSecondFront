import React, { useEffect, useContext } from "react";
import { fetchAuctions, AuctionsContext } from "../context/AuctionsContext";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { cutDate } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const AuctionsScreen = () => {
  const { auctions, setAuctions } = useContext(AuctionsContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuctions().then(res => setAuctions(res?.data?.not_closed_auctions));
  }, []);

  const onClickAuction = id => {
    navigate(`/auction/${id}`);
  };

  return (
    <div>
      {auctions ? (
        <>
          <Typography
            component="div"
            fontSize={20}
            gutterBottom
            marginBottom={1}
            marginTop={3}
            marginLeft="8%"
          >
            {auctions?.length > 0 ? <h2>Auctions:</h2> : <h2>There is no auctions!</h2>}
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <List sx={{ bgcolor: "background.paper", width: "85%" }} aria-label="contacts">
              <ListItem>
                <ListItemIcon>
                  <FormatListBulletedIcon />
                </ListItemIcon>
                <ListItemText primary="ID" style={{ minWidth: "25%" }} />
                <ListItemText primary="Name" style={{ minWidth: "25%" }} />
                <ListItemText primary="Date start" style={{ minWidth: "25%" }} />
                <ListItemText primary="Date end" style={{ minWidth: "25%" }} />
              </ListItem>
              {auctions
                ? auctions?.map(auction => {
                    return (
                      <ListItem style={{ border: "1px solid black", textAlign: "center" }}>
                        <ListItemText primary={`${auction?.ID.substring(0, 8)} ...`} />
                        <ListItemButton
                          onClick={() => onClickAuction(auction?.ID)}
                          style={{
                            backgroundColor: "#add8e6",
                            borderRadius: "12px",
                            width: "80px",
                          }}
                        >
                          <ListItemText primary={auction?.Name} />
                        </ListItemButton>
                        <ListItemText primary={cutDate(auction?.DateStart)} />
                        <ListItemText primary={cutDate(auction?.DateEnd)} />
                      </ListItem>
                    );
                  })
                : ""}
            </List>
          </div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default AuctionsScreen;
