<script lang="ts">
	import InfoIcon from "../../icons/blocks/infoIcon.svelte";
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full rounded-2xl border-2 border-info bg-info/30 p-4">
	<div class="mb-2 flex items-center space-x-2 text-info">
		<InfoIcon />
		<span class="brand font-semibold uppercase">Info!</span>
	</div>
	<slot />
</div>
