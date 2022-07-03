import { createStyles, makeStyles } from "@mui/styles";
import * as yup from "yup";

export const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        marginTop: "7%",
        margin: "auto",
        backgroundColor: "#ffffff",
      },
    },
    box: {
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.up("sm")]: {
        width: "70%",
      },
      [theme.breakpoints.up("md")]: {
        width: "60%",
      },
      [theme.breakpoints.up("lg")]: {
        width: "40%",
      },
      borderColor: "black",
      marginBottom: "10%",
    },
    icon: {
      marginBottom: "50%",
    },
    form: {
      marginTop: "2%",
      marginLeft: "8%",
    },
    loader: {
      marginTop: "3%",
      width: "90%",
    },
    edit: {
      fontSize: "1.1em",
      background: "linear-gradient(to right, #aaffa9, #11ffbd)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0 3px 5px 2px #A9A9A9",
      color: "#000",
      height: 46,
      padding: "0 15px",
      cursor: "pointer",
      marginTop: 5,
    },
    editButton: {
      cursor: "pointer",
      fontSize: "1.1rem",
      marginTop: 10,
      marginBottom: 15,
    },
    editBox: {
      background: "background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
      textAlign: "center",
      marginRight: "5%",
      marginBottom: "3%",
      marginTop: "1%",
    },
    errors: {
      marginLeft: "2%",
      color: "red",
      fontSize: "1.1em",
    },
    checkout: {
      fontSize: "1.1em",
      background: "linear-gradient(to right, #aaffa9, #11ffbd)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0 3px 5px 2px #A9A9A9",
      color: "#000",
      height: 46,
      padding: "0 15px",
      cursor: "pointer",
      marginTop: 5,
    },
    register: {
      fontSize: "1.1em",
      background: "linear-gradient(to right, #ece9e6, #ffffff)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0 3px 5px 2px #A9A9A9",
      color: "#696969",
      height: 46,
      padding: "0 15px",
      cursor: "pointer",
      marginTop: 5,
    },
    loginButton: {
      cursor: "pointer",
      fontSize: "1.1rem",
      marginTop: 10,
      marginBottom: 15,
    },
    checkoutBox: {
      background: "background: linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
      textAlign: "center",
      marginRight: "5%",
      marginBottom: "3%",
      marginTop: "1%",
    },
    registerBox: {
      textAlign: "center",
      marginRight: "5%",
      marginBottom: "3%",
      marginTop: "1%",
    },
  }),
);
