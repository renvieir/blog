import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Amplify } from "aws-amplify";

import Layout from "../../components/Layout";
import { Post } from "../../interfaces";
import awsExports from "../../aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

const PostPage: NextPage<Post> = ({ title, text }) => {
  return (
    <Layout title={title}>
      <h1>{title}</h1>
      <p>{text}</p>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = (await import("../../utils/posts.json")).default;
  const slugs = blogs.map((blog) => blog.slug);
  const paths = slugs.map((slug) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogs = (await import("../../utils/posts.json")).default;
  const blog = blogs.find((x) => x.slug === params?.slug);
  return {
    props: { ...blog },
  };
};

export default PostPage;
