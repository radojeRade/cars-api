import React from "react";

export default function RegisterForm({ user, setUser, handleOnRegister }) {
  return (
    <div>
      <div className="App">
        <form onSubmit={handleOnRegister}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={({ target }) => setUser({ ...user, name: target.value })}
          />
          <input
            placeholder="Email"
            type="email"
            name="name"
            value={user.email}
            onChange={({ target }) => setUser({ ...user, email: target.value })}
          />
          <input
            placeholder="Password"
            type="password"
            value={user.password}
            onChange={({ target }) =>
              setUser({ ...user, password: target.value })
            }
          />
          <button type="submit">Register</button>
        </form>
        {/* <button onClick={handleRefresh}>Refresh</button> */}
      </div>
    </div>
  );
}
