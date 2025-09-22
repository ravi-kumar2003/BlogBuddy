import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/FooterCom";

export default function () {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to right, #C9D6FF,#E2E2E2)" }}>
      <>
        <Navbar />
        <Header/>
        <BlogList/>
        <NewsLetter/>
        <Footer/>
      </>
    </div>
  );
}
