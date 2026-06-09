import type { Metadata } from "next";
import { ThemeProvider } from "@/context/themeProvider";
import { NavBar } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
	title: "Anthony Bologna | Full Stack Engineer",
	description:
		"Portfolio of Anthony Bologna — Full Stack Engineer passionate about user and developer experience.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="min-h-screen antialiased">
				<ThemeProvider>
					<div className="bg-primary-gradient min-h-screen flex flex-col">
						<NavBar />
						<div className="flex-1">{children}</div>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
