import * as React from "react"

import {
  Header,
  Wrapper,
  Footer
} from "@/components"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
      <Footer />
    </>
  )
}