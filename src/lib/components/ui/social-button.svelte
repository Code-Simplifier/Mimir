<script lang="ts">
	export let title: string;
</script>

<button
	class="flex items-center my-2 justify-center space-x-4 rounded-2xl border border-primary p-5 text-primary"
>
	<slot />
	<span>{title}</span>
</button>
