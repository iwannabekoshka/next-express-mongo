import PageTitle from "../../components/PageTitle"
import Link from "next/link"
import Head from "next/head"
import styled from "styled-components"

const PostWrapper = styled.div`
    padding: 2em;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
`
const PostTitle = styled.h2`
    margin-bottom: 1.5em;
`


export default function Post() {
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
                            <div className="col">
                                <PostTitle>Some cool Post Title</PostTitle>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime doloremque earum perferendis iure, consequuntur voluptatibus, sapiente quis, porro magnam voluptas ut impedit consequatur accusantium nemo aut praesentium quod asperiores animi provident dignissimos unde molestias. Nobis sint ipsam repudiandae officiis illo error fugit quaerat aspernatur. Obcaecati veniam hic praesentium ullam deserunt.</p>
                            </div>
                            <div className="col">
                                
                            </div>
                        </div>
                        
                        <button className="btn btn-danger mt-5">Remove</button>
                    </PostWrapper>
                </div>
            </section>
        </>
    )
}