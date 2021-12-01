import Navbar from "./Navbar"
import styled from "styled-components"

export default function Layout({children}) {
    return (
      <>
            <Navbar />

            <main className="py-5">
                {children}
            </main>
        </>
    )
}