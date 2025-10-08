// src/App.tsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import honoLogo from "./assets/hono.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("unknown");

  const services = [
    "api.shzl.de",
    "auth.shzl.de",
    "bot.shzl.de",
    "cat.shzl.de",
    "chat.shzl.de",
    "db.shzl.de",
    "hi.shzl.de",
    "indahgo.shzl.de",
    "lib.shzl.de",
    "panel.shzl.de",
    "todo.shzl.de",
    "www.shzl.de",
  ];

  return (
    <>
      <div className="logos">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://hono.dev" target="_blank" rel="noreferrer">
          <img src={honoLogo} className="logo hono" alt="Hono logo" />
        </a>
        <a href="https://workers.cloudflare.com" target="_blank" rel="noreferrer">
          <img src={cloudflareLogo} className="logo cloudflare" alt="Cloudflare logo" />
        </a>
      </div>

      <h1>Vite + React + Hono + Cloudflare</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} aria-label="increment">
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="card">
        <button
          onClick={() => {
            fetch("/api/")
              .then((res) => res.json() as Promise<{ name: string }>)
              .then((data) => setName(data.name));
          }}
          aria-label="get name"
        >
          Name from API is: {name}
        </button>
        <p>
          Edit <code>worker/index.ts</code> to change the API name
        </p>
      </div>

      <div className="services">
  <h2>Other SHZL Services</h2>
  {services.map((domain) => (
    <div key={domain}>
      <a href={`https://${domain}`} target="_blank" rel="noreferrer">
        {domain}
      </a>
    </div>
  ))}
</div>

      <p className="read-the-docs">Click on the logos to learn more</p>
    </>
  );
}

export default App;
