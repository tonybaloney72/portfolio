import Image from "next/image";
import { site } from "@/data/site";

export const About = () => {
	return (
		<section
			id='about'
			className='mx-auto max-w-5xl scroll-mt-24 px-6 py-10 md:py-16'>
			<h2 className='text-sm uppercase tracking-widest text-accent'>About</h2>
			<div className='mt-8 grid items-start gap-10 md:grid-cols-[200px_1fr]'>
				<div className='relative mx-auto aspect-4/5 w-48 overflow-hidden rounded-md border border-border md:mx-0 md:w-full'>
					<Image
						src='/assets/bowtie.jpg'
						alt={site.name}
						fill
						className='object-cover object-[center_20%]'
						sizes='200px'
					/>
				</div>
				<div className='max-w-xl'>
					<p className='text-lg text-primary'>
						I care about the person using the product and the person maintaining
						it - clear interfaces, typed code, and software people actually use.
					</p>
					<p className='mt-4 text-base text-secondary'>
						Away from the keyboard I make my own pizza and take it seriously. I
						like baking and cooking, and I love baseball. Go Yanks!
					</p>
				</div>
			</div>
		</section>
	);
};
