import Link from "next/link";

export default function Button({href, title}) {
	return (
		<Link href={href} className='flex justify-center items-center max-h-12 px-8 bg-background border border-accent rounded-full text-accent text-base font-medium hover:bg-accent hover:text-background transition-colors duration-300'>
			{title}
		</Link>
	);
}