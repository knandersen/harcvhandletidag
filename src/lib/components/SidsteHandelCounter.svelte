<script lang="ts">
	import { getRelativeTime } from '$lib/date';
	import { SvelteDate } from 'svelte/reactivity';

	const { transfer } = $props();

	let str = $state(getRelativeTime(new SvelteDate(transfer.timestamp)).string);
	setInterval(() => {
		str = getRelativeTime(new SvelteDate(transfer.timestamp)).string;
	}, 1000);
</script>

<div class="flex flex-col items-center gap-2">
	<p>Sidste handel var for<br /><span class="font-bold">{str}</span> siden.</p>
	<p class="text-sm text-balance">{transfer.name} {transfer.description}</p>
</div>
