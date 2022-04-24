import { useState } from "react";
import Input from "../Input/Input";
import { Box, Paper, Typography } from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { style } from "@mui/system";

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isCompleted: null,
  });

  const commonStyles = {
    bgcolor: "background.paper",
    borderColor: "text.primary",
    border: 1,
  };

  // const todoStyle = props.isCompleted
  //   ? { padding: "0 27px 0 0", textDecoration: "line-through" }
  //   : { padding: "0 27px 0 0", textDecoration: "" };

  console.log(props.isCompleted);

  const test = props.isCompleted
    ? {
        textAlign: "left",
        marginLeft: "1.5rem",
        marginRight: "1rem",
        textDecoration: "line-through",
      }
    : {
        textAlign: "left",
        marginLeft: "1.5rem",
        marginRight: "0.8rem",
        textDecoration: "",
      };

  function handleTodoIdClick(e) {
    console.log(props.id);
    props.deleteToDo(props.id);
  }

  function submitUpdateHandler(value) {
    //just get the value from the form
    props.updateToDo(edit.id, value);
    console.log(value);
    setEdit({
      id: null,
      value: "",
    });
  }

  function handleCheckClick(e) {
    e.preventDefault();
    props.CheckToDo(props.id);
  }

  if (edit.id) {
    return (
      <Box style={{ marginTop: 20 }}>
        <Input edit={edit} onSubmit={submitUpdateHandler} />
      </Box>
    );
  }

  return (
    <Paper>
      <Box
        fullwidth
        style={{ marginTop: 20, padding: "0.4rem 0" }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <li style={test}>{props.todo}</li>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CheckCircleOutlineIcon onClick={handleCheckClick} />
          <DeleteOutlineIcon onClick={handleTodoIdClick} />
          <ModeEditIcon
            onClick={() =>
              setEdit({
                id: props.id,
                value: props.todo,
                isCompleted: props.isCompleted,
              })
            }
          />
        </Box>
      </Box>
    </Paper>
  );
}

export default Todo;
