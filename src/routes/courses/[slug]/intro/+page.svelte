<script lang="ts">
	export let data;
	import Chapter from "../../../../components/ui/chapter.svelte";
	import Header from "../../../../components/ui/header.svelte";
</script>

<section class="flex flex-col items-center justify-center pt-44">
	<Header title={data.metadata.title} desc="" />

	<div class="prose mt-20 w-[90%] overflow-x-hidden text-justify text-lg md:text-xl">
		<svelte:component this={data.content} />
	</div>
	<div class="grid w-[90%] grid-cols-1 gap-4 md:grid-cols-4">
		{#each data.chapters as { title, slug, desc, id, icon }}
			<Chapter chapter={{ title, slug, desc, id, icon }} />
		{/each}
	</div>
</section>
