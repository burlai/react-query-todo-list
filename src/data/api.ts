const API_URL = "https://dummyjson.com/todos";

export const fetchTodos = async () => {
  const response = await fetch(`${API_URL}?limit=7`);
  return response.json();
};

// services/todoAPI.ts
export const deleteTodo = async (id: number) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });

    return {
      status: response.status,
      data: await response.json(),
    };
  } catch (error) {
    // Throw error when fetching was unsuccessful
    console.error("Error deleting todo:", error);
    throw error;
  }
};
