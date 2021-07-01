import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return {...initialProps};
	}

	render() {
		return (
			<Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
					<link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css" />
					<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>



				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
