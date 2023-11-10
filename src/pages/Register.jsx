import React from "react";
import { Link } from "../Link.jsx";
import { NavBar } from "../components/NavBar.js";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { FormRegister } from "../components/formRegister.js";

export default function Register() {
  return (
    <>
      <NavBar />
      <FormRegister />
      <Footer />
    </>
  );
}
