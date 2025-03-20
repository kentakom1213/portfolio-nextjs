import Head from "next/head";
import { Container } from "./LayoutStyles";
import { Header } from "../components/Header/Header";
import type { ReactNode } from "react";

export const Layout = ({
	pageType,
	width,
	children,
}: {
	pageType: string;
	width: number;
	children: ReactNode;
}) => {
	return (
		<>
			<Head>
				<title>KOMOTO Kenta</title>
				<meta name="description" content="Portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/powellicon.svg" />
			</Head>
			<Header pageType={pageType} />
			<Container width={width}>{children}</Container>
		</>
	);
};
