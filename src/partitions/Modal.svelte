<script lang="ts">
	import { Button, Modal } from '$lib';
	import { fly } from 'svelte/transition';

	export let show = false;
	export let disableEsc = false;
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Modal</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<Button on:click={() => (show = !show)}>
			{#if show}
				Hide
			{:else}
				Show
			{/if}
		</Button>
		<Modal bind:show {disableEsc}>
			<div transition:fly={{ y: 16, duration: 200 }} class="rounded-md bg-white p-4">
				<p>Example modal, totally free customize, built-in trap focus</p>
				<div class="mt-2.5 grid grid-cols-4 gap-2">
					<button class="bg-black p-2 text-white focus:bg-green-600">1</button>
					<button class="bg-black p-2 text-white focus:bg-green-600">2</button>
					<button class="bg-black p-2 text-white focus:bg-green-600">3</button>
					<button class="bg-black p-2 text-white focus:bg-green-600">4</button>
				</div>
			</div>
		</Modal>
	</div>
	<div class="flex max-w-lg flex-wrap items-start gap-4">
		<label>
			<input type="checkbox" bind:checked={disableEsc} />
			<span>Disable esc</span>
		</label>
	</div>
</div>
