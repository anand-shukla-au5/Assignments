import React from "react";
import { TextField } from "@material-ui/core";
import "../Styles/nav.css";
export default function Nav() {
  return (
    <nav className="navBar">
      <form>
        <TextField id="standard-basic" label="Search User" />
      </form>
    </nav>
  );
}
