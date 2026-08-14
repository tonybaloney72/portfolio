import {
	FaCalendarAlt,
	FaFileDownload,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";
import { site } from "@/data/site";
import type { IconType } from "react-icons";

const links: { href: string; label: string; icon: IconType }[] = [
	{ href: site.linkedin, label: "LinkedIn", icon: FaLinkedin },
	{ href: site.github, label: "GitHub", icon: FaGithub },
	{ href: site.resume, label: "Resume", icon: FaFileDownload },
	{ href: site.calendar, label: "Book a call", icon: FaCalendarAlt },
];

export const Footer = () => {
	return (
		<footer className="border-t border-border">
			<div className="mx-auto flex max-w-5xl justify-center gap-8 px-6 py-6 text-sm text-secondary">
				{links.map(({ href, label, icon: Icon }) => (
					<a
						key={label}
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={label}
						title={label}
						className="flex items-center gap-2 hover:text-accent">
						<Icon className="text-xl" />
						<span className="hidden md:inline">{label}</span>
					</a>
				))}
			</div>
		</footer>
	);
};
