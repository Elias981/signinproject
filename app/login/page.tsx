"use client";

import { useState } from "react";
import { signInUser, signUpNewUser, signOutUser } from "./action";

export default function Page() {
  const [loginHover, setLoginHover] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [signUpHover, setSignUpHover] = useState(false);
  const [signUpActive, setSignUpActive] = useState(false);

  return (
    <>  
    <div>
        <form action={signOutUser}>
          <button type="submit">Log out</button>
        </form>
    </div>
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "2rem",
          width: "100%",
          maxWidth: "760px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <form
          action={signInUser}
          style={{
            width: "100%",
            maxWidth: "360px",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            padding: "1.5rem",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            background: "#ffffff",
            color: "#111827",
          }}
        >
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>Log In</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={{
                padding: "0.6rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                color: "#111827",
                background: "#ffffff",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              style={{
                padding: "0.6rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                color: "#111827",
                background: "#ffffff",
              }}
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setLoginHover(true)}
            onMouseLeave={() => {
              setLoginHover(false);
              setLoginActive(false);
            }}
            onMouseDown={() => setLoginActive(true)}
            onMouseUp={() => setLoginActive(false)}
            style={{
              padding: "0.6rem 0.75rem",
              border: "1px solid #111827",
              borderRadius: "8px",
              background: loginActive ? "#0b0f16" : loginHover ? "#1f2937" : "#111827",
              color: "#ffffff",
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
          >
            Log in
          </button>
        </form>

        <form
          action={signUpNewUser}
        style={{
          width: "100%",
          maxWidth: "360px",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          padding: "1.5rem",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          background: "#ffffff",
          color: "#111827",
        }}
        >
          <h2 style={{ margin: 0, fontSize: "1.25rem" }}>Sign Up</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <label htmlFor="signup-email">Email</label>
            <input
              id="signup-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              style={{
                padding: "0.6rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                color: "#111827",
                background: "#ffffff",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <label htmlFor="signup-password">Password</label>
            <input
              id="signup-password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              style={{
                padding: "0.6rem 0.75rem",
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                color: "#111827",
                background: "#ffffff",
              }}
            />
          </div>

          <button
            type="submit"
            onMouseEnter={() => setSignUpHover(true)}
            onMouseLeave={() => {
              setSignUpHover(false);
              setSignUpActive(false);
            }}
            onMouseDown={() => setSignUpActive(true)}
            onMouseUp={() => setSignUpActive(false)}
            style={{
              padding: "0.6rem 0.75rem",
              border: "1px solid #111827",
              borderRadius: "8px",
              background: signUpActive ? "#0b0f16" : signUpHover ? "#1f2937" : "#111827",
              color: "#ffffff",
              cursor: "pointer",
              transition: "background 120ms ease",
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </main>
    </>
  );
}
