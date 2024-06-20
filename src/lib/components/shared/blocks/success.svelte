<script lang="ts">
	import Icon from "@iconify/svelte";
	export let id: string = "#";
</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-success bg-success/30 p-4">
	<div class="mb-2 flex items-center space-x-2 text-success">
		<Icon icon="clarity:success-standard-line" width="32" />
		<span class="brand font-semibold uppercase">Success!</span>
	</div>
	<slot />
</div>
