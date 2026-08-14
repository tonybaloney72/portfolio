export const site = {
	name: "Anthony Bologna",
	title: "Full Stack Engineer",
	linkedin: "https://www.linkedin.com/in/anthony-michael-bologna/",
	github: "https://github.com/tonybaloney72",
	resume: "/assets/Anthony Bologna Resume.pdf",
	calendar: "https://calendar.app.google/oMTaVdUCsHsF7CXc6",
} as const;

export const featuredProjects = [
	{
		title: "MyExercise",
		stack: ["Next.js", "TypeScript", "Zustand", "Supabase"],
		blurb:
			"Most fitness apps dump a library and leave you to invent the plan. This one builds a daily routine, logs your progress, and ships as an installable Android app.",
		image: "/assets/exercise.png",
		href: "https://myexercise.dev",
		apk: "https://myexercise.dev/download/android",
	},
	{
		title: "Potluck",
		stack: ["React", "TypeScript", "Redux", "Supabase"],
		blurb:
			"An app to help people coordinate events and avoid forgetting who is bringing what. Event creation, invites, RSVPs, contributions, and notifications on Auth, Storage, and Postgres.",
		image: "/assets/PotLuck.png",
		href: "https://tony-baloney-potluck.vercel.app/",
	},
] as const;

export const demoProjects = [
	{
		title: "Wordle clone",
		stack: ["React", "TypeScript"],
		image: "/assets/wordle.png",
		href: "/projects/wordle",
		external: false,
	},
	{
		title: "Todo list",
		stack: ["React", "TypeScript"],
		image: "/assets/todo.png",
		href: "/projects/todo",
		external: false,
	},
	{
		title: "Coin Collector",
		stack: ["JavaScript", "HTML", "CSS"],
		image: "/assets/SUCCT.png",
		href: "https://tonybaloney72.github.io/SuperCoinCollector/",
		external: true,
	},
] as const;
