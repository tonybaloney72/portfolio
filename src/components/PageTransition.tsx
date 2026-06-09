"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const ROUTE_ORDER: Record<string, number> = {
	"/": 0,
	"/projects": 1,
	"/projects/todo": 2,
	"/projects/wordle": 3,
};

interface PageTransitionProps {
	children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
	const pathname = usePathname();
	const prevLocationRef = useRef(pathname);

	const currentOrder = ROUTE_ORDER[pathname] ?? 0;
	const prevOrder = ROUTE_ORDER[prevLocationRef.current] ?? 0;
	const direction: "left" | "right" =
		currentOrder > prevOrder ? "right" : "left";

	useEffect(() => {
		prevLocationRef.current = pathname;
	}, [pathname]);

	const variants = {
		enter: (dir: "left" | "right") => ({
			x: dir === "right" ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (dir: "left" | "right") => ({
			x: dir === "right" ? "-100%" : "100%",
			opacity: 0,
		}),
	};

	return (
		<div className="relative w-full overflow-hidden">
			<AnimatePresence mode="wait" custom={direction}>
				<motion.div
					key={pathname}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						duration: 0.3,
						ease: "easeInOut",
					}}
					className="w-full px-4 py-0 md:p-10">
					{children}
				</motion.div>
			</AnimatePresence>
		</div>
	);
};
