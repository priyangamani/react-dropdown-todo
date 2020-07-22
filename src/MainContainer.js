import React, { useState, useEffect } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import AddForm from './AddForm';
import styles from './styles';



const DropDownItem = (todos) => {
  const classes = styles();
  return (
    <Autocomplete
      id="combo-box-demo"
      className={[classes.root, classes.inputContainerWidth]}
      options={todos}
      getOptionLabel={(option) => option.name}
      renderInput={(params) =>
        <TextField {...params} label="Select Country" variant="outlined"

        />
      }
    />
  );
}

export default function MainContainer() {
  const classes = styles();
  const [countryList, setCountryList] = useState([]);
  useEffect(() => {
    axios.get('./assests/country.json')
      .then(response => {
        setCountryList(response.data);
      })
      .catch(error => {
        throw error;
      });

  }, []);
  const addValue = name => {
    const NewTodos = [...countryList, { name }];
    setCountryList(NewTodos);
  };
  return (
    <React.Fragment>
      <div className={classes.listItem}>
        {DropDownItem(countryList)}
      </div>
      <AddForm addValue={addValue} />
    </React.Fragment>
  );
}