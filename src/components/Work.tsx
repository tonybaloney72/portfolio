import Image from "next/image";
import Link from "next/link";
import { demoProjects, featuredProjects } from "@/data/site";

export const Work = () => {
	return (
		<section
			id='work'
			className='mx-auto max-w-5xl scroll-mt-24 px-6 py-10 md:py-16'>
			<h2 className='text-sm uppercase tracking-widest text-accent'>
				Selected work
			</h2>
			<div className='mt-8 flex flex-col gap-16'>
				{featuredProjects.map((project, index) => (
					<article
						key={project.title}
						className='grid items-start gap-6 md:grid-cols-[1.1fr_0.9fr] md:gap-10'>
						<div>
							<p className='text-2xl text-primary'>{project.title}</p>
							<p className='mt-1 text-sm text-accent'>
								{project.stack.join(" · ")}
							</p>
							<p className='mt-4 text-base text-secondary'>{project.blurb}</p>
							<div className='mt-5 flex flex-wrap gap-4 text-sm'>
								<a
									href={project.href}
									target='_blank'
									rel='noopener noreferrer'
									className='text-primary underline-offset-4 hover:text-accent hover:underline'>
									Live
								</a>
								{"apk" in project && project.apk && (
									<a
										href={project.apk}
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary underline-offset-4 hover:text-accent hover:underline'>
										Android APK
									</a>
								)}
							</div>
						</div>
						<a
							href={project.href}
							target='_blank'
							rel='noopener noreferrer'
							className='relative block aspect-16/10 overflow-hidden rounded-md border border-border bg-secondary'>
							<Image
								src={project.image}
								alt={`${project.title} screenshot`}
								fill
								priority={index === 0}
								className='object-cover object-top'
								sizes='(max-width: 768px) 100vw, 420px'
							/>
						</a>
					</article>
				))}
			</div>

			<h3 className='mt-20 text-sm uppercase tracking-widest text-tertiary'>
				Playable demos
			</h3>
			<div className='mt-6 grid gap-6 sm:grid-cols-3'>
				{demoProjects.map(project => {
					const card = (
						<>
							<div className='relative aspect-16/10 overflow-hidden rounded-md border border-border bg-secondary'>
								<Image
									src={project.image}
									alt={`${project.title} screenshot`}
									fill
									className='object-cover object-top'
									sizes='(max-width: 640px) 100vw, 280px'
								/>
							</div>
							<p className='mt-3 text-base text-primary'>{project.title}</p>
							<p className='mt-1 text-sm text-secondary'>
								{project.stack.join(" · ")}
							</p>
						</>
					);

					const className = "block rounded-md p-1 hover:opacity-90";

					return project.external ?
							<a
								key={project.title}
								href={project.href}
								target='_blank'
								rel='noopener noreferrer'
								className={className}>
								{card}
							</a>
						:	<Link
								key={project.title}
								href={project.href}
								className={className}>
								{card}
							</Link>;
				})}
			</div>
		</section>
	);
};
