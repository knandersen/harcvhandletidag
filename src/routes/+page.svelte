<script>
	import { sidsteHandel } from '$lib/constants';
	import { getRelativeTime } from '$lib/date';

	let relativeTime = $state(getRelativeTime(sidsteHandel));

	setInterval(() => {
		relativeTime = getRelativeTime(sidsteHandel);
	}, 1000);
</script>

<svelte:head><title>Har CV handlet i dag?</title></svelte:head>
<div class="flex h-full w-full flex-col items-center justify-center gap-8">
	<div class="text-9xl font-bold text-blue-950">Nej</div>
	<div class="max-w-md text-center text-2xl text-gray-700">
		Sidste handel er<br /><span class="font-bold text-blue-950">{relativeTime.string}</span> siden.
	</div>
</div>
