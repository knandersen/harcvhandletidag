<script lang="ts">
	import Confetti from '$components/Confetti.svelte';
	import Hype from '$components/Hype.svelte';
	import SenesteHandel from '$components/SenesteHandel.svelte';
	import SidsteHandel from '$components/SidsteHandelCounter.svelte';
	import Voldsomt from '$components/Voldsomt.svelte';

	const { data } = $props();

	const transferToday =
		new Date(data.transfer.timestamp).toDateString() === new Date().toDateString();
	console.log('Transfer today:', transferToday);

	const yesno = transferToday ? 'Ja' : 'Nej';
</script>

<svelte:head><title>Har CV handlet i dag?</title></svelte:head>
<div
	class="relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-16 text-foreground-400"
>
	<section class="flex flex-col items-center gap-8">
		<div class="text-9xl font-bold">
			{yesno}
		</div>
		<div class="h-30 max-w-md text-center text-2xl">
			{#if transferToday}
				<SenesteHandel transfer={data.transfer} />
			{:else}
				<SidsteHandel />
			{/if}
		</div>
	</section>
	<div class="flex w-48 flex-col items-center gap-4">
		{#if transferToday}
			<Voldsomt />
		{:else}
			<Hype />
		{/if}
	</div>
	{#if transferToday}
		<Confetti />
	{/if}
	<footer class="absolute bottom-0 pb-4">Powered by Aarhus Suburbans</footer>
</div>
