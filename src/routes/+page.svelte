<script lang="ts">
	import HypeButton from '$components/HypeButton.svelte';
	import SidsteHandel from '$components/SidsteHandel.svelte';
	import HypeCounter from '$components/HypeCounter.svelte';
</script>

<svelte:head><title>Har CV handlet i dag?</title></svelte:head>
<div class="flex h-full w-full flex-col items-center justify-center gap-8">
	<div class="text-9xl font-bold text-blue-950">Nej</div>
	<div class="max-w-md text-center text-2xl text-gray-700">
		<SidsteHandel />
	</div>
	<HypeCounter />
	<HypeButton />
	<div class="">Powered by Aarhus Suburbans</div>
</div>
