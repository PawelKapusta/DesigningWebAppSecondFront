import React, { useContext, useEffect, useState } from "react";
import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AuctionsContext, createOffer, fetchAuctionData } from "../context/AuctionsContext";
import { cutDate } from "../utils/utils";
import { useStyles } from "../styles/Form";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormInput from "../components/FormInput";

const AuctionDetailsScreen = () => {
  const param = useParams();
  const id = param.id;
  const { auction, setAuction } = useContext(AuctionsContext);
  const auctionDetails = auction ? auction?.auctionDetails : {};
  const auctionOffers = auction ? auction?.offersArray : [];
  const classes = useStyles();
  const [response, setResponse] = useState({});

  useEffect(() => {
    fetchAuctionData(id).then(res => {
      setAuction(res?.data);
    });
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    price: yup.number().required("Price is a required field"),
  });

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
    const offer = {};
    offer.Name = data.name;
    offer.Price = data.price;

    createOffer(id, offer).then(res => {
      setResponse(res?.data);
    });

    reset();
  };

  const checkDate = dateEnd => {
    const d1 = new Date(Date.now());
    const d2 = new Date(dateEnd);
    return d1.getTime() > d2.getTime();
  };

  return (
    <div>
      <Card sx={{ marginBottom: 5 }}>
        <CardContent>
          <Typography variant="h6">ID: {auctionDetails?.ID}</Typography>
          <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="subtitle1" fontWeight="bold">
                Name:
              </Typography>
              <Typography>{auctionDetails?.Name}</Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                Institution:
              </Typography>
              <Typography>{auctionDetails?.Institution}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" fontWeight="bold">
                Description:
              </Typography>
              <Typography>{auctionDetails?.Description}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h6">
                Date start: {`${cutDate(auctionDetails?.DateStart)}`}
              </Typography>
              <Typography variant="h6">
                Date end: {`${cutDate(auctionDetails?.DateEnd)}`}
              </Typography>
            </Grid>
          </Grid>
          {checkDate(auctionDetails?.DateEnd) ? (
            <>
              <Typography variant="subtitle1" fontWeight="bold" marginTop={5}>
                Offers:
              </Typography>
              {auctionOffers?.length > 0 ? (
                <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                  {auctionOffers?.map(offer => {
                    return (
                      <ListItem style={{ border: "1px solid black" }}>
                        <ListItemText primary={`Name: ${offer?.Name}`} />
                        <ListItemText primary={`Price: ${offer?.Price} zł`} />
                        <ListItemText primary={`Date: ${cutDate(offer?.Date)}`} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <div style={{ color: "red", textAlign: "center" }}>
                  <h3>No offers here!</h3>
                </div>
              )}
            </>
          ) : (
            ""
          )}
        </CardContent>
      </Card>
      <div>
        {!checkDate(auctionDetails?.DateEnd) ? (
          <>
            <div className={classes.root}>
              <Box className={classes.box}>
                <Paper elevation={3}>
                  <Typography
                    variant="h5"
                    fontWeight="bold"
                    style={{ textAlign: "center", marginTop: 20 }}
                  >
                    Add offer
                  </Typography>
                  <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                    <FormInput
                      labelTitle="Name"
                      name="name"
                      control={control}
                      register={register}
                      errors={errors?.name}
                      setValue={setValue}
                      numberRows={1}
                      type="text"
                    />
                    <FormInput
                      labelTitle="Price"
                      name="price"
                      control={control}
                      register={register}
                      errors={errors?.price}
                      setValue={setValue}
                      numberRows={1}
                      type="number"
                    />
                    <div className={classes.registerBox}>
                      <input type="submit" value="Add" className={classes.register} />
                    </div>
                  </form>
                </Paper>
              </Box>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AuctionDetailsScreen;
