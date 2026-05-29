<script lang="ts">
	import Hype from '$components/Hype.svelte';
	import SidsteHandel from '$components/SidsteHandel.svelte';
</script>

<svelte:head><title>Har CV handlet i dag?</title></svelte:head>
<div
	class="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-16 text-foreground-400"
>
	<section class="flex flex-col items-center gap-8">
		<div class="text-9xl font-bold">Nej</div>
		<div class="h-30 max-w-md text-center text-2xl">
			<SidsteHandel />
		</div>
	</section>
	<div class="flex w-48 flex-col items-center gap-4">
		<Hype />
	</div>
	<footer class="absolute bottom-0 pb-4">Powered by Aarhus Suburbans</footer>
</div>
