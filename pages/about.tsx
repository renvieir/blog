import React, { useRef } from "react";
import Layout from "../components/Layout";

const AboutPage = (): JSX.Element => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <div>
        <h2>Texto:</h2>
        <textarea ref={messageRef} />
      </div>
      <div>
        <h2>Telefone:</h2>
        <input ref={phoneRef} />
        <button
          onClick={() =>
            window.open(
              `https://api.whatsapp.com/send?phone=+55${phoneRef.current?.value}&text=${messageRef.current?.value}`
            )
          }
        >
          Iniciar conversa
        </button>
      </div>
    </Layout>
  );
};

export default AboutPage;
