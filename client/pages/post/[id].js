import PageTitle from "../../components/PageTitle"
import Link from "next/link"
import Head from "next/head"
import styled from "styled-components"
import Image from 'next/image'

export default function Post({ post }) {
    if (!post) {
        return 'Loading...'
    }

    return (
        <>
            <Head>
                <title>Post</title>
            </Head>

            <PageTitle>Post</PageTitle>

            <section>
                <div className="container">
                    <PostWrapper>
                        <div className="row">
                            <div className="col-6">
                                <PostTitle>{post.title}</PostTitle>
                                <p>{post.text}</p>
                            </div>
                            <div className="col-6 position-relative">
                                <ImageRounded 
                                    src={post.imgUrl} 
                                    layout='fill'
                                    // objectFit='contain'
                                    // objectPosition='right top'
                                />
                            </div>
                        </div>
                        
                        <button className="btn btn-danger mt-5">Remove</button>
                    </PostWrapper>
                </div>
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://localhost:5000/api/post/${context.query.id}`)
  const post = await res.json()

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      // will be passed to components as props
      post,
    },
  }
}


const PostWrapper = styled.div`
    padding: 2em;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
`
const PostTitle = styled.h2`
    margin-bottom: 1.5em;
`
const ImageRounded = styled(Image)`
    border-radius: 10px;
`