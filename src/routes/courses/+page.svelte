<script lang="ts">
    export let data;
	import Header from "../../components/ui/header.svelte";
    import Course from "../../components/ui/course.svelte"
</script>

<svelte:head>
    <title>Mimir - Courses</title>
</svelte:head>

<section class="flex pt-44 flex-col items-center justify-center">
    <Header title="courses" desc="Best Programming practices to elevate your skills" />
    <div class="grid grid-cols-1 place-items-center gap-3 md:grid-cols-3">
		{#each data.courses as { title, slug, price, level, chapters, thumbnail, date, published }}
			<Course course={{ title, slug, price, level, chapters, thumbnail, date, published }} />
		{/each}
	</div>
</section>
