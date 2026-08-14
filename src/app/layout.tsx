import type { Metadata } from "next";
import { ThemeProvider } from "@/context/themeProvider";
import { NavBar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
	title: "Anthony Bologna | Full Stack Engineer",
	description:
		"Portfolio of Anthony Bologna - Full Stack Engineer. Selected work includes Potluck and MyExercise.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			data-theme='dark'
			className='scroll-smooth'
			suppressHydrationWarning>
			<body className='min-h-screen antialiased'>
				<ThemeProvider>
					<div className='flex min-h-screen flex-col bg-primary'>
						<NavBar />
						<main className='flex-1'>{children}</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
