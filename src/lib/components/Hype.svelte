<script lang="ts">
	import { hype } from '$src/lib/constants.svelte';
	import { CountUp } from 'countup.js';
	import { onMount } from 'svelte';
	let counterEl: HTMLSpanElement | null = null;
	let counter: CountUp | null = null;
	let count = 0;
	let timeout: ReturnType<typeof setTimeout> | null = null;
	let isPollingPaused = false; // Keep a callable reference so we can force a refresh after POST.
	let refreshHype: (() => Promise<void>) | null = null;
	onMount(() => {
		// initial render
		if (counterEl) {
			counter = new CountUp(counterEl, hype.level, { duration: 0.8, useGrouping: false });
			counter.start();
		}
		// polling
		refreshHype = async () => {
			if (isPollingPaused) return;
			try {
				const res = await fetch('/api/hype');
				if (!res.ok) return;
				const latest = await res.json();
				hype.level = Number(latest);
			} catch (e) {
				console.error('Failed to refresh hype', e);
			}
		};
		refreshHype();
		const timer = setInterval(() => {
			void refreshHype?.();
		}, 10_000);
		return () => {
			clearInterval(timer);
			if (timeout) clearTimeout(timeout);
		};
	});
	// animate whenever hype.level changes
	$effect(() => {
		const next = hype.level;
		if (!counter) return;
		counter.update(next);
	});
	const formatterDK = new Intl.NumberFormat('da-DK');
	function handleClick() {
		isPollingPaused = true;
		hype.level += 1;
		count += 1;
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(async () => {
			const payload = count;
			count = 0;
			try {
				await fetch('/api/hype', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ level: payload })
				});
			} catch (e) {
				console.error('Failed to send hype update', e);
			} finally {
				isPollingPaused = false;
				await refreshHype?.();
				// immediate resync after flush
			}
		}, 3000);
	}
</script>

<div class="flex flex-col items-center gap-4 text-center text-balance">
	<button
		onclick={handleClick}
		class="touch-action-manipulation size-40 rotate-12 rounded-full bg-accent px-4 py-2 text-4xl font-bold text-white uppercase transition-transform duration-150 ease-out hover:bg-accent-200
               active:scale-110"
	>
		køb!
	</button>
	<div>
		<span bind:this={counterEl}>{formatterDK.format(hype.level)}</span> hype point siden seneste handel.
	</div>
</div>
.
