import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App";
// import RTWebsite from "./components/website_dokumentasi_rt_modern";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/*<RTWebsite />*/}
  </StrictMode>,
);
