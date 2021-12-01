import Head from 'next/head'
import PostItem from '../components/PostItem'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'

export default function Home({posts}) {
  if (!posts) return(
    <p>Loading...</p>
  )

  return (
    <>
      <Head>
        <title>Some Koshkas stuff</title>
      </Head>

      <PageTitle home={true}>Home</PageTitle>

      <section>
        <div className="container">

          <div className="row g-4">
            {posts.map(post => {
              return (
                <div className="col-3">
                  <PostItem 
                    key={post._id}
                    post={post}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/api/post')
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true
    }
  }

  return {
    props: { // will be passed to components as props
      posts
    }
  }
}