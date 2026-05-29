<script lang="ts">
	const { transfer } = $props();

	const { name, link, description } = $derived(transfer);
</script>

<a class="font-semibold underline" href={link} target="_blank" rel="noopener noreferrer">{name}</a>
{description}
