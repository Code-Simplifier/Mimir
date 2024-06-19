<script lang="ts">
	import ErrorIcon from "../../icons/blocks/errorIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-error bg-error/30 p-4">
	<div class="mb-2 flex items-center space-x-2 text-error">
		<ErrorIcon />
		<span class="brand font-semibold uppercase">Error!</span>
	</div>
	<slot />
</div>
