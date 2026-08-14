"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ThemeSelector } from "./ThemeSelector";
import { site } from "@/data/site";

const links = [
	{ href: "/#work", id: "work", label: "Work" },
	{ href: "/#about", id: "about", label: "About" },
] as const;

const SECTION_IDS = links.map(link => link.id);

export const NavBar = () => {
	const pathname = usePathname();
	const [active, setActive] = useState<string | null>(null);
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (pathname.startsWith("/projects")) {
			setActive("work");
			return;
		}

		if (pathname !== "/") {
			setActive(null);
			return;
		}

		let frame = 0;

		const updateActive = () => {
			const headerBottom =
				headerRef.current?.getBoundingClientRect().bottom ?? 56;
			const viewport = window.visualViewport?.height ?? window.innerHeight;
			const about = document.getElementById("about");
			const work = document.getElementById("work");

			if (about) {
				const aboutTop = about.getBoundingClientRect().top;
				if (aboutTop < viewport) {
					setActive("about");
					return;
				}
			}

			if (work && work.getBoundingClientRect().top <= headerBottom + 48) {
				setActive("work");
				return;
			}

			setActive(null);
		};

		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(updateActive);
		};

		updateActive();

		const observer = new IntersectionObserver(onScroll, {
			threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
		});
		SECTION_IDS.forEach(id => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		window.addEventListener("scroll", onScroll, { passive: true, capture: true });
		window.addEventListener("touchmove", onScroll, { passive: true });
		window.addEventListener("hashchange", onScroll);
		window.visualViewport?.addEventListener("scroll", onScroll);

		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
			window.removeEventListener("scroll", onScroll, { capture: true });
			window.removeEventListener("touchmove", onScroll);
			window.removeEventListener("hashchange", onScroll);
			window.visualViewport?.removeEventListener("scroll", onScroll);
		};
	}, [pathname]);

	return (
		<header
			ref={headerRef}
			className="sticky top-0 z-50 border-b border-border bg-primary/90 backdrop-blur-sm">
			<nav className="mx-auto flex h-14 max-w-5xl items-center px-6">
				<div className="flex-1">
					<Link
						href="/"
						className="hidden text-sm text-secondary hover:text-primary sm:inline">
						{site.name}
					</Link>
				</div>
				<div className="flex items-center gap-5">
					{links.map(link => (
						<a
							key={link.id}
							href={link.href}
							className="text-sm text-primary hover:cursor-pointer">
							<span
								className={`underline-animation ${active === link.id ? "active" : ""}`}>
								{link.label}
							</span>
						</a>
					))}
				</div>
				<div className="flex flex-1 justify-end">
					<ThemeSelector />
				</div>
			</nav>
		</header>
	);
};
