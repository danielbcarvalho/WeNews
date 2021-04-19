import Prismic from "@prismicio/client";
import { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | WeNews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>17 de abril de 2021</time>
            <strong>Criando uma configuração reutilizável</strong>
            <p>
              Com Axios podemos fazer algumas configurações básicas, criar uma
              baseURL para não precisarmos digitar em cada requisição o endereço
              do servidor,
            </p>
          </a>
          <a href="">
            <time>17 de abril de 2021</time>
            <strong>Criando uma configuração reutilizável</strong>
            <p>
              Com Axios podemos fazer algumas configurações básicas, criar uma
              baseURL para não precisarmos digitar em cada requisição o endereço
              do servidor,
            </p>
          </a>
          <a href="">
            <time>17 de abril de 2021</time>
            <strong>Criando uma configuração reutilizável</strong>
            <p>
              Com Axios podemos fazer algumas configurações básicas, criar uma
              baseURL para não precisarmos digitar em cada requisição o endereço
              do servidor,
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title", "post.content"],
      pageSize: 100,
    }
  );

  console.log("log ->", response);

  return {
    props: {},
  };
};
