"use client";

import { useEffect, useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((req) => req.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="p-4 grid grid-cols-[400px_minmax(400px,_1fr)] gap-3">
      <div className="bg-neutral-800 p-4 rounded-xl flex flex-col justify-between">
        <h2 className="text-2xl font-bold">
          Cumplimos con un total de {users ? users.length : 0} usurios.
        </h2>
        <p className="text-xl font-medium text-neutral-200">
          Sumate a esta gran familia!
        </p>
      </div>
      <div>
        <ul className="grid bg-neutral-950 rounded-xl grid-cols-3 gap-4">
          {users.map((user) => (
            <li key={user.id}>
              <div className="p-4">
                <h4 className="text-xl font-bold">{user.name}</h4>
                <p>{user.email}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
