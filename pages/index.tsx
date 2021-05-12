import React from "react";
import { NextPage } from "next";

import Layout from "../components/Layout";
import Router from "next/router";

const IndexPage: NextPage = () => {
  const title = "Pacheco's Blog";
  return (
    <Layout title={title}>
      <h1>{title} 👋</h1>
      <ul>
        <li
          style={{
            cursor: "pointer",
            textDecoration: "underline",
          }}
          onClick={() => {
            Router.push("/teste/assertividade");
            console.log("oi");
          }}
        >
          Teste de comunicação assertiva
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
