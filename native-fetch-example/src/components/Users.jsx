import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users1) => setUsers(users1))
      .catch((e) => console.log(e))
      .finally(()=> setIsLoading(false))
  }, []);

  return (
    <>
      <h1>Users</h1>
      {isLoading && <div>Loading...</div>}

      {users.map((user, index) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
}

export default Users;
