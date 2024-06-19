<script lang="ts">
	export let data;
	import Header from "$lib/components/ui/header.svelte";
	import Article from "$lib/components/ui/article.svelte";
</script>

<svelte:head>
	<title>Mimir - Articles</title>
</svelte:head>

<section class="flex flex-col items-center justify-center pt-44">
	<Header title="articles" desc="Keep yourself updated with the developer world" />
	<div class="grid grid-cols-1 place-items-center gap-3 md:grid-cols-3">
		{#each data.articles as { title, slug, desc, tags, thumbnail }}
			<Article article={{ title, slug, desc, tags, thumbnail }} />
		{/each}
	</div>
</section>
