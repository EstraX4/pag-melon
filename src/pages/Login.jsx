import React from "react";
import { Link } from "../Link.jsx";
import { NavBar } from "../components/NavBar.js";
import {LoginC} from "../components/LoginC.js";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export default function Login() {

  return (
    <>
      <NavBar />
      <LoginC />
      <Footer />
    </>
  );
}
