<script lang="ts">
	import { onMount } from 'svelte';
	import { CountUp } from 'countup.js';
	import { hype } from '$src/lib/constants.svelte';

	let counterEl: HTMLSpanElement | null = null;
	let counter: CountUp | null = null;

	onMount(() => {
		// initial render
		if (counterEl) {
			counter = new CountUp(counterEl, hype.level, {
				duration: 0.8,
				useGrouping: false
			});
			counter.start();
		}

		// polling
		const refreshHype = async () => {
			try {
				const res = await fetch('/api/hype');
				if (!res.ok) return;
				const latest = await res.json();
				hype.level = latest.hypeLevel;
			} catch (e) {
				console.error('Failed to refresh hype', e);
			}
		};

		refreshHype();
		const timer = setInterval(refreshHype, 10_000);

		return () => clearInterval(timer);
	});

	// animate whenever hype.level changes
	$effect(() => {
		const next = hype.level;
		if (!counter) return;
		counter.update(next);
	});
</script>

<div><span bind:this={counterEl}>{hype.level}</span> hype point siden seneste handel.</div>
