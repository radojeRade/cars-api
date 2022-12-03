import React from "react";

export default function Form({ user, setUser, handleOnLogin }) {
  return (
    <div>
      <div className="App">
        <form onSubmit={handleOnLogin}>
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
          <button type="submit">Login</button>
        </form>
        {/* <button onClick={handleRefresh}>Refresh</button> */}
      </div>
    </div>
  );
}
