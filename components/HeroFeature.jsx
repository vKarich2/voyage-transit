export default function HeroFeatures({display, title}) {
	return (
		<div className="flex items-center gap-3 text-foreground">
			<div className={`w-[100px] h-[1px] bg-foreground ${display}`}></div>
			<p>{title}</p>
		</div>
	);
}

