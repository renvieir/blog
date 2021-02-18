import React from 'react'
import Link from 'next/link'
import { GetStaticProps, NextPage } from 'next'

import Layout from '../components/Layout'
import { Post } from '../interfaces'

interface PageProps {
  posts: Post[]
}

const IndexPage: NextPage<PageProps> = ({ posts }) => {
  const title = "Pacheco's Blog V2"
  return (
    <Layout title={title}>
      <h1>{title} 👋</h1>
      <ul>
        {posts.map(({ slug, title }) => (
          <li key={slug}>
            <Link as={`/posts/${slug}`} href={`/posts/${slug}`} passHref>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = (await import('../utils/posts.json')).default
  return {
    props: { posts },
  }
}

export default IndexPage
