import type App from "next/app";
import type { AppContext, AppProps } from "next/app";
import Document, {
	type DocumentContext,
	type DocumentInitialProps,
} from "next/document";
import type { ReactPropTypes } from "react";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext,
	): Promise<DocumentInitialProps & { styles: JSX.Element }> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp:
						(App: React.ComponentType<AppProps>) => (props: AppProps) =>
							sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
