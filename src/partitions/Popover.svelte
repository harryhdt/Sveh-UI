<script lang="ts">
	import { Button, Popover } from '$lib';

	export let show = false;
	export let disableEsc = false;
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Popover</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<Button on:click={() => (show = !show)}>
			{#if show}
				Hide
			{:else}
				Show
			{/if}
		</Button>
		<Popover bind:show {disableEsc}>
			<svelte:fragment slot="body">Hai</svelte:fragment>
		</Popover>
	</div>
	<div class="flex max-w-lg flex-wrap items-start gap-4">
		<label>
			<input type="checkbox" bind:checked={disableEsc} />
			<span>Disable esc</span>
		</label>
	</div>
</div>
