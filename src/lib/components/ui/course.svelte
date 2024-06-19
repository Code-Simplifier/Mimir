<script lang="ts">
	import type { Course } from "$lib";
	import LearnIcon from "../icons/nav/learnIcon.svelte";
	export let course: Course;
</script>

<a href={`/courses/${course.slug}`}>
	<article
		class="relative h-[450px] w-[350px] rounded-2xl border border-slate-700 bg-slate-800/50 duration-200 hover:mx-3 hover:my-3 hover:scale-105"
	>
		<img src={course.thumbnail} alt={course.title} class="rounded-t-2xl" />

		<div class="flex h-[250px] flex-col justify-between p-4">
			<div class="flex flex-col gap-y-3">
				<div class="flex w-full justify-between">
					<span class="rounded-lg bg-primary px-2 text-black">{course.level}</span>
					{#if course.price === "Free"}
						<div class="rounded-xl font-semibold border border-success bg-success/40 px-2 text-center">
							{course.price}
						</div>
					{/if}
					{#if course.price == "Pro"}
						<div class="rounded-xl font-semibold border border-error bg-error/40 px-2 text-center">
							{course.price}
						</div>
					{/if}
				</div>
				<h1 class="brand text-2xl font-thin uppercase tracking-wide">
					{course.title}
				</h1>
			</div>

			<span class="flex items-center gap-x-2 text-slate-500">
				<LearnIcon />
				{course.chapters} Chapters
			</span>
		</div>
	</article>
</a>
