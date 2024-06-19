<script lang="ts">
	export let url: string = "#";
	export let title: string = "Button";
</script>

<a
	href={`${url}`}
	class="my-10 w-fit cursor-pointer bg-primary p-3 px-12 uppercase tracking-wide text-primary hover:tracking-widest"
>
	<span>
		{title}
	</span><i></i>
</a>

<style>
	a {
		position: relative;
		transition: 0.5s;
		border-radius: 10px;
	}
	a:hover {
		box-shadow: 0 0 15px #fcefde;
		border-radius: 10px;
	}
	a:before {
		content: " ";
		position: absolute;
		inset: 2px;
		background: #0d0c0b;
		border-radius: 10px;
	}

	a span {
		position: relative;
		z-index: 1;
	}

	a i {
		position: absolute;
		inset: 0;
		display: block;
	}
	a i::before {
		content: " ";
		position: absolute;
		top: 0;
		left: 80%;
		width: 10px;
		height: 4px;
		background: #0d0c0b;
		transform: translateX(-50%) skew(325deg);
		transition: 0.5s;
	}

	a:hover i::before {
		width: 20px;
		left: 20%;
	}

	a i::after {
		content: " ";
		position: absolute;
		bottom: 0;
		left: 20%;
		width: 10px;
		height: 4px;
		background: #0d0c0b;
		transform: translateX(-50%) skew(325deg);
		transition: 0.5s;
	}

	a:hover i::after {
		width: 20px;
		left: 80%;
	}
</style>
