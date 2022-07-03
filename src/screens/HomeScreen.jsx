import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/auctions/add");
  };

  return (
    <div className={styles.mainDiv}>
      <h1 className={styles.header}>Welcome to Auctions Page</h1>
      <Card className={styles.card}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Page description
          </Typography>
          <Typography variant="h6" component="div">
            Here you can add your own auctions
          </Typography>
          <Typography variant="body2">
            If you want to make an offer to listed auctions you can also click into one of them and
            write your proposition.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" onClick={handleButtonClick}>
            Go to add new auction
          </Button>
        </CardActions>
      </Card>
      <div className={styles.image}>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169"
          alt="Home photo"
          loading="lazy"
          width="70%"
        />
      </div>
    </div>
  );
};

export default HomeScreen;
