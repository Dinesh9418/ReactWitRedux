import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import globalStore from "./redux/store/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={globalStore}>
    <App />
  </Provider>,
);
