<script lang="ts">
	import Icon from "@iconify/svelte";
</script>

<nav class="absolute z-10 mb-0 w-full p-5 md:p-0">
	<!-- MD/XL SCREEN NAVBAR -->
	<div
		class="fixed hidden w-full items-center justify-between px-10 py-10 text-primary backdrop-blur-md md:flex"
	>
		<a href="/">
			<img src="/logo.jpeg" alt="logo" class="h-[64px] w-[64px] rounded-full" />
		</a>
		<div class="flex gap-x-16">
			<a
				href="/courses"
				class="rounded-lg p-2 transition-all duration-200 hover:bg-slate-600/50 hover:text-white"
			>
				<Icon icon="hugeicons:graduation-scroll" width="32" />
			</a>
			<a
				href="/articles"
				class="rounded-lg p-2 transition-all duration-200 hover:bg-slate-600/50 hover:text-white"
			>
				<Icon icon="hugeicons:news" width="32" />
			</a>
			<a
				href="/auth"
				class="rounded-lg p-2 transition-all duration-200 hover:bg-slate-600/50 hover:text-white"
			>
				<Icon icon="lucide:user-round" width="32" />
			</a>
		</div>
	</div>

	<!-- SM SCREEN NAVBAR -->
	<div class="flex flex-col items-center justify-center gap-y-10 md:hidden">
		<a href="/">
			<img src="/logo.jpeg" alt="logo" class="h-[64px] w-[64px] rounded-full" />
		</a>
		<div class="flex gap-x-14">
			<a href="/courses">
				<Icon icon="hugeicons:graduation-scroll" width="32" />
			</a>
			<a href="/articles">
				<Icon icon="hugeicons:news" width="32" />
			</a>
			<a href="/auth">
				<Icon icon="lucide:user-round" width="32" />
			</a>
		</div>
	</div>
</nav>
