import Head from 'next/head'
import PostItem from '../components/PostItem'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'

export default function Home() {
  return (
    <>
      <Head>
        <title>Some Koshkas stuff</title>
      </Head>

      <PageTitle>Home</PageTitle>

      <section>
        <div className="container">

          <div className="row">
            <div className="col-3">
              <PostItem />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
