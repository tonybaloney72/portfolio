"use client";

import { useState, createContext, useContext, useEffect } from "react";
import type { ReactNode } from "react";

export type Theme = "light" | "dark";

const THEMES: Theme[] = ["light", "dark"];

interface ThemeContextType {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setThemeState] = useState<Theme>("dark");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme && THEMES.includes(savedTheme as Theme)) {
			setThemeState(savedTheme as Theme);
		}
		setMounted(true);
	}, []);

	const setTheme = (newTheme: Theme) => {
		setThemeState(newTheme);
		localStorage.setItem("theme", newTheme);
	};

	useEffect(() => {
		if (mounted) {
			document.documentElement.setAttribute("data-theme", theme);
		}
	}, [theme, mounted]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
