import Section from "@/app/Section";

export async function ToolsSection() {
	// const tRec = await getTranslations("Products.tools");

	return <Section
		asideContainerStyle={{ placeContent: "center" }}
		title="Tools"
		aside={null}
		link="products/tools"
	>
		A collection of tools, that make your life easier.
	</Section>;
}

export default async function ToolsList() {
	return <>
		<Section
			title="Audio Organizer"
			link="tools/audio-file-organizer"
		>
			Renames your audio files, to contain BPM and Key
		</Section>
	</>
}