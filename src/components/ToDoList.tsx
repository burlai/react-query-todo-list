import { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { FormGroup } from "@mui/material";

import { ToDoItem } from "./ToDoItem";
import { deleteTodo, fetchTodos } from "../data/api";

// Defining the type of the data returned from the server (React Query)
type ReactQueryTodoType = {
  id: number;
  todo: string;
  completed: boolean;
};

export const TodoList = () => {
  // Fetch the data from the server
  const { data, isLoading, isError } = useQuery("todos", fetchTodos, {
    staleTime: 60000,
  });

  // Define the local state for the component
  const [todosData, setTodosData] = useState(data?.todos || []);

  // Set the local state with the data from the server
  useEffect(() => {
    setTodosData(data?.todos || []);
  }, [data?.todos]);

  const deleteTodoHandler = useMutation({
    mutationFn: deleteTodo,
    onSuccess: (res) => {
      if (res.status === 200) {
        // When deletion on server is successful, we need to update our local state
        setTodosData([
          ...todosData.filter(
            (toDo: ReactQueryTodoType) => toDo.id !== res.data.id
          ),
        ]);
      }
    },
  });

  // Conditional rendering based on state of the component
  if (isLoading) {
    return <div>Your to do list is loading...</div>;
  }

  if (isError) {
    return <div>Error occur, please refresh the page or try again later</div>;
  }

  return (
    <FormGroup>
      {todosData.map((toDo: ReactQueryTodoType) => {
        return (
          <ToDoItem
            key={toDo.id}
            toDoId={toDo.id}
            text={toDo.todo}
            completed={toDo.completed}
            deleteToDo={(id: number) => deleteTodoHandler.mutate(id)}
          />
        );
      })}
    </FormGroup>
  );
};
