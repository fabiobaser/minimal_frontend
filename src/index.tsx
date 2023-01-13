import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const initElement = document.querySelector("#app") || document.body;

const root = createRoot(initElement);

root.render(<App />);
