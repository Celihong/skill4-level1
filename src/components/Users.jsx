import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
            <p>Name: {user.name.firstname} {user.name.lastname}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address.city}, {user.address.street}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
