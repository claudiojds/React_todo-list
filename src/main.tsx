import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/index.module.css";
import { TodoContextProvider } from "./contexts/TodoContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/*TodoContextProvider -> encapsula os eleentos filhos que tem acesso ao contexto  */}
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);
