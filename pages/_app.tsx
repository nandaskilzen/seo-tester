import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				{/* <meta name="theme-color" content="{{THEME_COLOR}}" /> */}
				<meta name="robots" content="index, follow" />
				{/* <!-- Primary Meta Tags --> */}
				<title>College Mentor</title>
				<meta name="title" content="College Mentor" />
				<meta
					name="description"
					content="Get Detailed Information on Top Colleges in India and Admission News. Get Alerts for Result, Cutoff and Forms for top Entrance, Gov and Banking Exams."
				/>
				<meta name="keywords" content="kCET JEE engineering neet medical" />
				{/* <!-- Alternate language versions of the page --> */}
				<link rel="alternate" hrefLang="en" href="https://skilzen.com/" />
				{/* <!-- banner --> */}
				<link rel="icon" type="image/png" sizes="32x32" href="/banner.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/banner.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/banner.png" />
				{/* <!-- You can generate a banner using a tool like https://banner.io --> */}
				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="http://dev.collegementor.com/" />
				<meta property="og:title" content="College Mentor" />
				<meta
					property="og:description"
					content="Get Detailed Information on Top Colleges in India and Admission News. Get Alerts for Result, Cutoff and Forms for top Entrance, Gov and Banking Exams."
				/>
				<meta property="og:image" content="/banner.png" />
				<meta property="og:site_name" content="Collegementor" />
				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="/banner.png" />
				<meta property="twitter:url" content="http://dev.collegementor.com/" />
				<meta property="twitter:title" content="College Mentor" />
				<meta
					property="twitter:description"
					content="Get Detailed Information on Top Colleges in India and Admission News. Get Alerts for Result, Cutoff and Forms for top Entrance, Gov and Banking Exams."
				/>
				<meta property="twitter:image" content="/banner.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
