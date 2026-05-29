<script lang="ts">
	import { onMount } from 'svelte';
	import confetti from 'canvas-confetti';

	const launchConfetti = () => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
			colors: ['#202235', '#ffffff', '#D6B713', '#202235']
		});
	};

	// Launch confetti when the component is mounted and every 5 seconds thereafter
	onMount(() => {
		launchConfetti();
		const interval = setInterval(launchConfetti, 1000);
		return () => clearInterval(interval);
	});
</script>
