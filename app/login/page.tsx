"use client";

import { useState } from "react";

export default function Page() {
  const [isHover, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1.5rem",
      }}
    >
      <form
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
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
          <label htmlFor="password">Password</label>
          <input
            id="password"
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
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => {
            setIsHover(false);
            setIsActive(false);
          }}
          onMouseDown={() => setIsActive(true)}
          onMouseUp={() => setIsActive(false)}
          style={{
            padding: "0.6rem 0.75rem",
            border: "1px solid #111827",
            borderRadius: "8px",
            background: isActive ? "#0b0f16" : isHover ? "#1f2937" : "#111827",
            color: "#ffffff",
            cursor: "pointer",
            transition: "background 120ms ease",
          }}
        >
          Log in
        </button>
      </form>
    </main>
  );
}
