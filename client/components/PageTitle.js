import styled from "styled-components"
import Link from "next/link"

const Title = styled.h1`
  /* margin-bottom: 0.5em; */
`;

export default function PageTitle({ children }) {
  return (
    <div className="container mb-5">
      <Title>{children}</Title>
      <Link href="/">
        <a>Back Home</a>
      </Link>
    </div>
  )
}
