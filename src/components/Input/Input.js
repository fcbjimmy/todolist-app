import React, { useState } from "react";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";

function Input(props) {
  const [todo, setTodo] = useState(props.edit ? props.edit.value : "");
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const data = {
      task: todo,
      id: Math.floor(Math.random() * 1000),
      isCompleted: false,
    };
    props.edit ? props.onSubmit(todo) : props.onAddtodo(data);
    setTodo("");
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl fullWidth>
        <label htmlFor="todo"></label>
        {props.edit ? (
          <>
            <TextField label="" onChange={handleInputChange} />
            <Button
              style={{ marginTop: 10 }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Update
            </Button>
          </>
        ) : (
          <>
            <TextField
              value={todo}
              placeholder="Enter to do"
              type="text"
              onChange={handleInputChange}
              required
            ></TextField>
            <Button
              style={{ marginTop: 10 }}
              color="primary"
              variant="contained"
              type="submit"
            >
              Add
            </Button>
          </>
        )}
      </FormControl>
    </form>
  );
}

export default Input;
