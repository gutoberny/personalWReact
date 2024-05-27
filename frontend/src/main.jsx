import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";

// append app to dom
const root = createRoot(document.getElementById("root"));

root.render(<App />);
