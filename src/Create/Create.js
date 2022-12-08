import { TextField, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Button from "@mui/material/Button";

import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import classes from "./Create.module.css";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";

function Create() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const navigate = useNavigate();

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => navigate("/Notes"));
    }
  };

  return (
    <Fragment>
      <Container>
        <Typography variant="h2" color="textSecondary">
          Create a New Note
        </Typography>

        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => setTitle(e.target.value)}
            className={classes.Customfield}
            label="Note Title"
            fullWidth
            required
            error={titleError}
          />
          <TextField
            onChange={(e) => setDetails(e.target.value)}
            className={classes.Customfield}
            label="Details"
            fullWidth
            required
            multiline
            rows={4}
            error={detailsError}
          />
          <FormControl className={classes.Customfield}>
            <FormLabel>Note Category</FormLabel>
            <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
              <FormControlLabel control={<Radio />} label="Money" value="money" />
              <FormControlLabel control={<Radio />} label="To Do" value="todo" />
              <FormControlLabel control={<Radio />} label="Reminder" value="reminder" />
              <FormControlLabel control={<Radio />} label="Work" value="work" />
            </RadioGroup>
          </FormControl>

          <Button
            className={classes.btn}
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<ArrowCircleRightIcon />}
          >
            Submit
          </Button>
        </form>
      </Container>
    </Fragment>
  );
}

export default Create;
