<script lang="ts">
	import { sidsteHandel } from '$src/lib/constants.svelte';
	import { getRelativeTime } from '$lib/date';

	let relativeTime = $state(getRelativeTime(sidsteHandel));

	setInterval(() => {
		relativeTime = getRelativeTime(sidsteHandel);
	}, 1000);
</script>

Sidste handel var for<br /><span class="font-bold">{relativeTime.string}</span> siden.
