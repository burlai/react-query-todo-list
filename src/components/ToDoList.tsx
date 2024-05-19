/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "react-query";

import { fetchTodos } from "../data/api";

export const TodoList = () => {
  const { data } = useQuery("todos", fetchTodos, {
    staleTime: 60000,
  });

  console.log("DATA: ");
  console.log(data?.todos);

  return (
    <ul>
      {data?.todos.map((element: any) => {
        return <li key={element.id}>{element.todo}</li>;
      })}
    </ul>
  );
};
