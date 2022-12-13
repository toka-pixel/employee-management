const BASE_URL = "http://localhost:8888/.netlify";

export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();

  return json;
};

export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) {
    return json;
  }

  return {};
};

export const addUser = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${BASE_URL}/api/users/`, Options);
    const json = await response.json();

    return json;
  } catch (e) {
    return e;
  }
};

export const updateUser = async (userId, formData) => {
  const Options = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await response.json();

  return json;
};

export const deleteUser = async (userId) => {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await response.json();

  return json;
};
