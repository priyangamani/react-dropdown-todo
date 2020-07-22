import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';
import "./App.css";
import Alert from '@material-ui/lab/Alert';

function AddForm({ addValue }) {
  const classes = styles();
  const [value, setValue] = useState("");
  const [addItem, setAddItem] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addValue(value);
    setValue("");
    setAddItem(true);
  };

  const handleChange = prop => event => {
    setAddItem(false);
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-adornment-password"
        variant="outlined"
        type="text"
        label="Add Country"
        value={value}
        onChange={handleChange("country")}
        className={classes.inputContainerWidth}
      />
      <Button className={[classes.buttonWidth, classes.buttonContainer]} variant="contained" color="primary" onClick={handleSubmit}>
        Add & Select
      </Button>
      {addItem && <Alert severity="success">
         Added Successfully — <strong>check it out!</strong>
      </Alert>}
    </form>
  );
}

export default AddForm;