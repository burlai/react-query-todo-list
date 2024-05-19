const API_URL = "https://dummyjson.com/todos";

export const fetchTodos = async () => {
  const response = await fetch(`${API_URL}?limit=7`);
  return await response.json();
};
