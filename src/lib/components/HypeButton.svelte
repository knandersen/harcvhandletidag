<script lang="ts">
	import { hype } from '$src/lib/constants.svelte';

	// the button should increment a counter. After 3 seconds without clicks, the total count should be sent to /api/hype

	let count = 0;
	let timeout: NodeJS.Timeout;

	function handleClick() {
		hype.level += 1;
		count++;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fetch('/api/hype', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ level: count })
			});
			count = 0;
		}, 3000);
	}
</script>

<button
	onclick={handleClick}
	class="rounded bg-accent px-4 py-2 font-bold text-white hover:bg-accent-200"
>
	Køb, køb, køb!!!
</button>
