<script lang="ts">
	export let chapter: {
		title: string;
		slug: string;
		desc: string;
		id: number;
		icon: string;
	};
</script>

<a href={chapter.slug} class="transition-all duration-200 hover:my-3 hover:scale-105">
	<article class="flex h-[200px] flex-col space-y-4 rounded-2xl bg-slate-800/50 p-4 text-left">
		<div class="flex w-full items-center justify-between text-2xl">
			<div class="brand flex space-x-2 font-semibold tracking-tight">
				{#if chapter.id <= 9}
					<span class="text-primary">0{chapter.id}</span>
				{:else}
					<span class="text-primary">{chapter.id}</span>
				{/if}
				<span class="text-slate-500">{chapter.title}</span>
			</div>
			<span>{chapter.icon}</span>
		</div>
		<p class="text-justify text-slate-300">{chapter.desc}</p>
	</article>
</a>
