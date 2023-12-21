import { Link, Snippet, Code } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
			</div>

			<div className="flex gap-3">
				<Link
					isExternal
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Documentation
				</Link>
				<Link
					isExternal
					className={buttonStyles({ variant: "bordered", radius: "full" })}
				>
					GitHub
				</Link>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Get started by editing <Code color="primary">app/page.tsx</Code>
					</span>
				</Snippet>
			</div>
		</section>
	);
}