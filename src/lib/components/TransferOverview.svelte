<script lang="ts">
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import ArrowLeftRight from '@lucide/svelte/icons/arrow-left-right';
	import { prettyDate } from '../date';

	const { transfers } = $props();
</script>

<Drawer.Root direction="right">
	<Drawer.Trigger><ArrowLeftRight class=" size-12" /></Drawer.Trigger>
	<Drawer.Content>
		<div class="mx-auto w-full max-w-sm">
			<Drawer.Header>
				<Drawer.Title>Handler i transfervinduet</Drawer.Title>
				<Drawer.Description class="text-foreground-200"
					>15. juni - 31. august 2026</Drawer.Description
				>
			</Drawer.Header>
			<div class="p-4 pb-0">
				{#each transfers as transfer}
					<div class="flex flex-col gap-0 py-2">
						<p class="text-sm font-semibold text-balance">{transfer.name}</p>
						<p class="text-sm text-balance">{transfer.description}</p>
						<p class="text-right text-xs text-foreground-200">
							{prettyDate(new Date(transfer.timestamp))}
						</p>
					</div>
				{/each}
			</div>
			<!-- <Drawer.Footer>
				<Drawer.Close></Drawer.Close>
			</Drawer.Footer> -->
		</div>
	</Drawer.Content>
</Drawer.Root>
