<script lang="ts">
	export let title: string;
	export let id: string = "#";

</script>

<div {id} class="my-10 w-full border-b border-slate-700 pb-2">
	<span class="brand font-thin text-2xl md:text-4xl uppercase text-primary">{title}</span>
</div>
