import Head from 'next/head'
import { Container } from "./LayoutStyles";
import { Header } from "../components/Header/Header";

export const Layout = ({ pageType, children }: any) => {
  return (
    <>
      <Head>
        <title>KOMOTO Kenta</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/powellicon.svg" />
      </Head>
      <Header pageType={ pageType } />
      <Container>
        {children}
      </Container>
    </>
  )
};