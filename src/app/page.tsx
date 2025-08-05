import React from "react";
import Layout from "@/components/Layout";
import Home from "@/components/landingpage/Home";
import About from "@/components/landingpage/About";
import Dashboard from "@/components/landingpage/Dashboard";
import Login from "@/components/landingpage/Login";


export default function HomePage() {
  return (
    <Layout>
      <Home />
      <About />
      <Dashboard />
      <Login />
    </Layout>
  );
}
