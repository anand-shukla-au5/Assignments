import React from "react";
import { TextField } from "@material-ui/core";
import "../Styles/nav.css";
export default function Nav({ query }) {
  return (
    <nav className="navBar">
      <form>
        <TextField
          id="standard-basic"
          label="Search User"
          onChange={(e) => query(e.target.value)}
        />
      </form>
    </nav>
  );
}
