import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Calculator from "./Caclulator";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
        <Calculator />
    </StrictMode>
);