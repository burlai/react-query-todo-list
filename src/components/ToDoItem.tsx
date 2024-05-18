import { useState } from "react";
import { Button, Checkbox, FormControlLabel } from "@mui/material";

type ToDoItemProps = {
  toDoId: number;
  text: string;
  completed: boolean;
  deleteToDo: (id: number) => void;
};

export const ToDoItem = ({
  toDoId,
  text,
  completed,
  deleteToDo,
}: ToDoItemProps) => {
  const [isDone, setIsDone] = useState(completed);

  return (
    <div className="todo-item">
      <FormControlLabel
        style={{ float: "left" }}
        control={
          <Checkbox
            onChange={() => {
              setIsDone(isDone ? false : true);
            }}
            checked={isDone}
          />
        }
        label={text}
      />
      <Button
        color="error"
        sx={{
          float: "right",
          position: "relative",
          display: "inline-block",
          width: "120px",
        }}
        type="button"
        variant="contained"
        onClick={() => deleteToDo(toDoId)}
      >
        Видалити
      </Button>
    </div>
  );
};
