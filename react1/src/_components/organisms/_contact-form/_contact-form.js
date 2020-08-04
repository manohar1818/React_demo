import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Input } from "@material-ui/core";
import Label from "../../atoms/_label/_label";
import InputBox from "../../atoms/_input/_input";

const useStyles = makeStyles((theme) => ({
  form: {
    marginTop: "20px",
    padding: "20px 50px 20px 50px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
  },
  firstName: {
    marginTop: "10px",
  },
  input: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "5px",
    marginTop: "5px",
    borderRadius: "4px",
  },
  button: {
    margin: "40px auto 0 auto",
    width: "80%",
  },
  button1: {
    color: "#000000",
    textTransform: "none",
    width: "100%",
    backgroundColor: "#ffffff",
    "&:hover": {
      backgroundColor: "#fffff3",
    },
  },
  error: {
    color: "red",
    textAlign: "initial",
  },
}));

export default function ContactForm() {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [subject, setSubject] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [error, setError] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Name
    var namePattern = /^[a-zA-Z]+$/;

    if (name === "" || name === null){
      setNameError("* Name cannot be empty");
    } 
    else if (!namePattern.test(name))
      setNameError("* Please provide a valid name");
    else setNameError("");

    // Email
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email === "" || email === null)
      setEmailError("* Email cannot be empty");
    else if (!emailPattern.test(email))
      setEmailError("* Please provide a valid email");
    else setEmailError("");

    // Phone

    if (phone === "" || phone === null)
      setPhoneError("* Phone number cannot be empty");
    else if (isNaN(phone) || phone.length != 10)
      setPhoneError("* Please provide a valid phone number");
    else setPhoneError("");

    //Subject

    if (subject === "" || subject === null)
      setSubjectError("* Message cannot be empty");
    else setSubjectError("");

   };

  return (
    <div className={classes.form}>
      <form>
        <div className={classes.firstName}>
          <Label text={"Name"} />
          <InputBox
            type={"text"}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder={"Enter name"}
          />
          <Typography className={classes.error}>
            {nameError !== "" && nameError}
          </Typography>
        </div>

        <div className={classes.firstName}>
          <Label text={"Email"} />
          <InputBox
            type={"email"}
            placeholder={"email"}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Typography className={classes.error}>
            {emailError !== "" && emailError}
          </Typography>
        </div>
        <div className={classes.firstName}>
          <Label text={"Phone number"} />
          <InputBox
            type={"text"}
            placeholder={"phone number"}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <Typography className={classes.error}>
            {phoneError !== "" && phoneError}
          </Typography>
        </div>
        <div className={classes.firstName}>
          <Label text={"Message"} />
          <InputBox
            type={"text"}
            placeholder={"Write your message"}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <Typography className={classes.error}>
            {subjectError !== "" && subjectError}
          </Typography>
        </div>
        <div className={classes.button}>
          <Button className={classes.button1} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
