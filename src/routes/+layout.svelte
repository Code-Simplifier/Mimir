<script lang="ts">
	import "../styles/app.css";

	import "@fontsource-variable/oxanium";
	import "@fontsource-variable/space-grotesk";
	import "@fontsource-variable/jetbrains-mono";

	import Navbar from "$lib/components/ui/navbar.svelte";
</script>

<main class="overflow-x-hidden">
	<Navbar />
	<div class="content">
		<slot />
	</div>
</main>
