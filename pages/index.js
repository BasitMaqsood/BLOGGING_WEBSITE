import Head from 'next/head'
import Image from 'next/image'
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Post from '../components/Post';
import { sortByDate } from '../utils'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  
  return (
    <div className='posts'>
      {posts.map((post, index) =>( 
          <Post post={post} key={index}/>
      ))}
    </div>
    
  )
}


export async function getStaticProps(){

  // Get files from the post directory
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from the posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate)
    }
  }
}
