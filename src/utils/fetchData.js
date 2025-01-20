export const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  };
  
  export const fetchUserDetails = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
  };
  