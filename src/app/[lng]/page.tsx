import { Link, Snippet, Code } from "@nextui-org/react";
import { button as buttonStyles } from "@nextui-org/theme";
import { Layout } from '@/components/layout'
import { useTranslation } from "@/i18n";
import { languages, fallbackLng } from "@/i18n/settings";

export default async function Home({ params: { lng }} : Readonly<{ params: {
	lng: string
}}>) {
	if (languages.indexOf(lng) < 0) lng = fallbackLng
	const { t } = await useTranslation(lng, 'sign')
	return (
		<Layout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
				</div>
				<div className="flex gap-3">
					<Link
						isExternal
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
					>
						{t('title')}
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
		</Layout>
	);
}