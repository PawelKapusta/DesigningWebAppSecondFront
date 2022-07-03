import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStyles } from "../styles/Form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormInput from "../components/FormInput";
import { createAuction } from "../context/AuctionsContext";

const AddAuctionScreen = () => {
  const classes = useStyles();
  const [dataComparisionError, setDataComparisionError] = useState(false);
  const navigate = useNavigate();
  const [response, setResponse] = useState({});
  const [error, setError] = useState({});

  const schema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    institution: yup.string().required("Institution is a required field"),
    description: yup.string().required("Description is a required field"),
    dateStart: yup.string().required("Date start is a required field"),
    dateEnd: yup.string().required("Date end is a required field"),
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
    if (data.dateStart > data.dateEnd) {
      setDataComparisionError(true);
    } else {
      const auction = {};
      auction.Name = data.name;
      auction.Institution = data.institution;
      auction.Description = data.description;
      auction.DateStart = data.dateStart;
      auction.DateEnd = data.dateEnd;
      auction.MaxPrice = data.price;

      createAuction(auction).then(res => {
        setResponse(res?.data);
        if (res?.data?.auction) {
          navigate("/auctions");
        }
      });
    }
    reset();
  };

  const showErrors = array => {
    array?.map(error => {
      return <div className={classes.errors}>{error?.message}</div>;
    });
  };

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Paper elevation={3}>
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
              labelTitle="Institution"
              name="institution"
              control={control}
              register={register}
              errors={errors?.institution}
              setValue={setValue}
              numberRows={1}
              type="text"
            />
            <FormInput
              labelTitle="Description"
              name="description"
              control={control}
              register={register}
              errors={errors?.description}
              setValue={setValue}
              numberRows={5}
              type="text"
            />
            <FormInput
              labelTitle="Date Start"
              name="dateStart"
              control={control}
              register={register}
              errors={errors?.dateStart}
              setValue={setValue}
              required={true}
              numberRows={1}
              InputProps=""
              type="datetime-local"
            />
            <FormInput
              labelTitle="Date End"
              name="dateEnd"
              control={control}
              register={register}
              errors={errors?.dateEnd}
              setValue={setValue}
              required={true}
              numberRows={1}
              InputProps=""
              type="datetime-local"
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
            {dataComparisionError ? (
              <span className={classes.errors}>Date start is not before data end</span>
            ) : (
              ""
            )}
            {response?.error ? (
              <span className={classes.errors}>{showErrors(response?.error?.errors)}</span>
            ) : (
              ""
            )}
            <div className={classes.registerBox}>
              <input type="submit" value="Add" className={classes.register} />
            </div>
          </form>
        </Paper>
      </Box>
    </div>
  );
};

export default AddAuctionScreen;
