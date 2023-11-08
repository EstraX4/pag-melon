import React from "react";
import { Link } from '../Link.jsx'
import { NavBar } from "../components/NavBar.js";
import { Banner } from "../components/Banner";
import { Product } from '../components/Product';
import { Inform } from "../components/Inform";
import { Testimonial } from '../components/Testimonial';
import { Popular } from "../components/Popular"
import { Footer } from '../components/Footer';

export default function Home () {
  return (
    <>
      <NavBar />
      <Banner />
      <Product />
      <Inform />
      <Testimonial />
      <Popular />
      <Footer />
    </>
  );
};
