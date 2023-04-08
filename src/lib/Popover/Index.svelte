<script lang="ts">
	// @ts-nocheck
	import { clickOutside } from '../Tools/click-outside';
	import { focusTrap } from 'svelte-focus-trap';
	import { fly } from 'svelte/transition';

	export let disableEsc = false;

	export let show = false;
	const setShow = (cond: boolean) => (show = cond);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === 'Escape' && !disableEsc) {
			show = false;
		}
	};

	let element: HTMLElement;
	$: if (show && element) {
		element.querySelector('button')?.focus();
	}
</script>

<div
	class="relative z-[80]"
	use:clickOutside
	on:click_outside={() => {
		if (show) {
			setTimeout(() => {
				show = false;
			}, 1);
		}
	}}
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<slot name="button" {setShow} />
	{#if show}
		<div
			use:focusTrap
			on:keydown={handleKeyDown}
			bind:this={element}
			transition:fly|local={{ y: -8, duration: 200 }}
			class="absolute mt-2 rounded-md bg-white p-2 shadow"
		>
			<button class="absolute opacity-0" />
			<slot name="body" {setShow} />
		</div>
	{/if}
</div>
