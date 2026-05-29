<script lang="ts">
	import HypeButton from '$components/HypeButton.svelte';
	import SidsteHandel from '$components/SidsteHandel.svelte';
	import HypeCounter from '$components/HypeCounter.svelte';
</script>

<svelte:head><title>Har CV handlet i dag?</title></svelte:head>
<div
	class="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-8 border text-foreground-400"
>
	<div class="text-9xl font-bold">Nej</div>
	<div class="max-w-md text-center text-2xl">
		<SidsteHandel />
	</div>
	<div class="flex w-48 flex-col items-center gap-4">
		<HypeButton />
		<HypeCounter />
	</div>
	<div class="absolute bottom-0 pb-4">Powered by Aarhus Suburbans</div>
</div>
