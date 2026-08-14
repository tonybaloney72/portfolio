import { site } from "@/data/site";

export const Hero = () => {
	return (
		<section className='mx-auto flex max-w-5xl flex-col justify-center px-6 py-10 md:min-h-[calc(100svh-3.5rem)] md:py-16'>
			<p className='text-sm uppercase tracking-widest text-accent'>
				{site.title}
			</p>
			<h1 className='mt-3 max-w-2xl text-3xl font-semibold text-primary md:text-5xl'>
				I build web apps people actually use.
			</h1>
			<p className='mt-5 max-w-xl text-lg text-secondary'>
				Event coordination, fitness tracking, and the glue in between - with a
				bias toward clear UI and code that is easy to maintain.
			</p>
			<div className='mt-8 flex flex-wrap gap-3'>
				<a
					href='#work'
					className='rounded-md bg-accent px-4 py-2 text-sm font-medium text-bg-secondary hover:bg-accent-secondary'>
					View work
				</a>
				<a
					href={site.resume}
					target='_blank'
					rel='noopener noreferrer'
					className='rounded-md border border-border px-4 py-2 text-sm text-primary hover:border-accent hover:text-accent'>
					Resume
				</a>
			</div>
		</section>
	);
};
