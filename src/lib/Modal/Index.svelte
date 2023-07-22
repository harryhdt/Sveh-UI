<script lang="ts">
	import { trapFocus } from '$lib/Tools/focus-trap';
	import { fade } from 'svelte/transition';

	import { afterUpdate, createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let className = '';

	export let show = false;
	export let disableEsc = false;
	export { className as class };

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === 'Escape' && !disableEsc) {
			closeModal();
		}
	};

	const closeModal = () => {
		show = false;
		dispatch('close');
	};

	const toggleShow = () => (show = !show);

	let element: HTMLElement;
	afterUpdate(() => {
		if (show) {
			element.querySelector('#initial-focus-button')?.setAttribute('tabindex', '-1');
		}
	});
</script>

<slot name="button" {toggleShow} />
{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		use:trapFocus={{ active: show }}
		bind:this={element}
		on:keydown={handleKeyDown}
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 backdrop-blur-sm sm:items-start sm:pt-4 {className}"
		style="z-index: 9992;"
		transition:fade={{ duration: 200 }}
		on:click|self={closeModal}
	>
		<button id="initial-focus-button" class="absolute opacity-0" />
		<slot {toggleShow} />
	</div>
{/if}
