<script lang="ts">
	export let data;
	import { formatDate } from "$lib/utils";
	import Header from "../../../components/ui/header.svelte";
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.metadata.title} />
</svelte:head>

<article class="flex flex-col items-center overflow-x-hidden rounded-2xl pt-44">
	<span
		class="code mb-5 my-5 text-sm font-semibold uppercase tracking-wider text-slate-700 md:text-lg"
		>[{" "}{data.metadata.category}{" "}]</span
	>
	<div class="flex gap-x-2">
		{#each data.metadata.tags as tag}
			<a href="/tags/{tag.title}" class={`code rounded-xl px-2 ${tag.bgColor} ${tag.fgColor}`}
				>#{tag.title}</a
			>
		{/each}
	</div><br><br>
    <Header title={data.metadata.title} desc={`Updated On ${formatDate(data.metadata.date)}`} />
	<img src="{data.metadata.thumbnail}" alt={data.metadata.title} class="w-[90%] rounded-2xl" />
	<div class="prose mt-20 w-[90%] overflow-x-hidden text-justify text-lg md:text-xl">
		<svelte:component this={data.content} />
	</div>
</article>

