import React from "react";
import Link from "next/link";
import { NextPage } from "next";

import Layout from "../components/Layout";

const IndexPage: NextPage = () => {
  const title = "Pacheco's Blog";
  return (
    <Layout title={title}>
      <h1>{title} 👋</h1>
      <ul>
        <li>
          <Link
            as={`/teste/assertividade`}
            href={`/teste/assertividade`}
            passHref
          >
            <a>Teste de comunicação assertiva</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default IndexPage;
