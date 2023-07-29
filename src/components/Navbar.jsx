import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      alignItems: 'center',
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={40} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
