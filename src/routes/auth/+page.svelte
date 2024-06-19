<script lang="ts">
	import Button from "$lib/components/ui/button.svelte";
	import Header from "$lib/components/ui/header.svelte";
</script>

<svelte:head>
	<title>Mimir - Auth</title>
</svelte:head>

<section class="flex h-screen flex-col items-center justify-center">
	<Header title="authentication" desc="Use your Semideus account 😇" />
	<div class="flex flex-col space-y-3 items-center justify-center w-full">
		<input
			placeholder="Email"
			type="email"
			class="w-[90%] rounded-2xl border-primary bg-slate-800 p-4 text-xl font-semibold text-primary focus:border focus:outline-none md:w-[40%]"
		/>
		<input
			placeholder="Password"
			type="password"
			class="w-[90%] rounded-2xl border-primary bg-slate-800 p-4 text-xl font-semibold text-primary focus:border focus:outline-none md:w-[40%]"
		/>
	</div>
	<div class="flex items-center justify-center space-x-4">
		<Button title="register" />
		<Button title="submit" />
	</div>
</section>
