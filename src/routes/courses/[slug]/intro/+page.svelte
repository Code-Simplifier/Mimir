<script lang="ts">
	export let data;

	import Info from "$lib/components/shared/blocks/info.svelte";
	import Chapter from "$lib/components/ui/chapter.svelte";
	import Header from "$lib/components/ui/header.svelte";

	import { formatDate } from "$lib/utils";
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<span
		class="code mb-10 text-sm font-semibold uppercase tracking-wider text-slate-700 md:text-lg"
		>[{" "}{data.metadata.level}{" "}]</span
	>

	<Header title={data.metadata.title} desc="" />

	<div class="prose w-[90%] overflow-x-hidden text-justify text-lg md:text-xl">
		<svelte:component this={data.content} />
		<Info>
			This course was last updated on
			<span class="font-semibold italic">
				{formatDate(data.metadata.date)}
			</span>
		</Info>
	</div>
	<span
		class="code mb-10 text-sm font-semibold uppercase tracking-wider text-slate-700 md:text-lg"
		>[{" "}chapters{" "}]</span
	>
	<div class="grid w-[90%] grid-cols-1 gap-4 md:grid-cols-4">
		{#each data.chapters as { title, slug, desc, id, icon }}
			<Chapter chapter={{ title, slug, desc, id, icon }} />
		{/each}
	</div>
</section>
