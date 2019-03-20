import * as React from "react";
import { render } from "react-dom";
import CreativeApproval from "./components/CreativeApprovalDropdown/CreativeApprovalDropdown";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>PDM UI Components Library</h1>
      <p>
        <h2>Creative Approval Status</h2>
        <CreativeApproval />
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
