"use client";

import { useTheme } from "@/context/themeProvider";

export const ThemeSelector = () => {
	const { theme, setTheme } = useTheme();
	const nextTheme = theme === "dark" ? "light" : "dark";

	return (
		<button
			onClick={() => setTheme(nextTheme)}
			className="rounded-md border border-border px-2 py-1 text-sm text-secondary hover:cursor-pointer hover:text-primary"
			aria-label={`Switch to ${nextTheme} theme`}
			title={`Switch to ${nextTheme} theme`}>
			{theme === "dark" ? "Light" : "Dark"}
		</button>
	);
};
