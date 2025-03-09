import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {  
  VeltCommentsSidebar, 

} from '@veltdev/react';
import { VeltComments,VeltProvider } from "@veltdev/react";
import { VELT_API_KEY } from "./config.ts";
import AuthComponent from "./services/AuthComponent.tsx";
import YourDocument from "./services/YourDocument.tsx";
createRoot(document.getElementById("root")!).render(
  <VeltProvider apiKey={VELT_API_KEY}>
    <AuthComponent/>
    <YourDocument />
    <App />
    <VeltComments textMode={false}/>
    <VeltCommentsSidebar/>
  </VeltProvider>
);
