import Link from "next/link"
import Head from 'next/head'
import styled from 'styled-components'
import PageTitle from "../components/PageTitle"

const Title = styled.h1`
    color: orangered;
    margin-bottom: 1em;
`


export default function error404() {
    return (
        <>
            <Head>
                <title>Wooops</title>
            </Head>

            <PageTitle>Error 404 page not found</PageTitle>
        </>
    )
}