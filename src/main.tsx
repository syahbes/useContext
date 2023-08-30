import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StateProvider } from "./pages/useGlobalState.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <App />
  </StateProvider>
);