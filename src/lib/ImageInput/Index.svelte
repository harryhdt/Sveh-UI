<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';
	import Button from '../Button/Index.svelte';
	import FileInput from '../FileInput/Index.svelte';
	import type { TextInputSize } from '$lib/types';
	import Label from '$lib/Constants/Label.svelte';

	let files: FileList | null = null;
	let className = '';

	export { className as class };
	export let containerClass = '';
	export let file: File | string | null = null;
	export let label = 'Photo';
	export let name = 'photo';
	export let placeholder = 'Select image';
	export let accept = 'image/*';
	export let required = false;
	export let disabled = false;
	export let error = '';
	export let imageReal: string | null = null;
	export let deleteImageReal: () => void = () => (imageReal = '');
	export let size: TextInputSize = 'medium';
	export let helper = '';
	export let onClearFiles: (() => void) | null = null;

	let showImage = false;
	let imageSrc = '';

	// if one only
	$: if (files && files.length) {
		const file0 = files[0];
		file = file0;
		if (file0) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				if (reader.result) {
					imageSrc = reader.result.toString();
					showImage = true;
				}
			});
			reader.readAsDataURL(file0);
		} else {
			showImage = false;
		}
	} else {
		file = null;
		imageSrc = '';
		showImage = false;
	}

	afterUpdate(() => {
		if (!file) {
			files = null;
		}
	});

	const openFileUpload = (e: MouseEvent) => {
		const evt = e.target as HTMLElement;
		const fileInput = evt.parentNode?.parentNode?.querySelector(
			"input[type='file']"
		) as HTMLInputElement;
		if (fileInput) fileInput.click();
	};
</script>

<div class="space-y-4">
	<div class="relative space-y-2">
		<Label {label} {error} {required}>
			<slot name="suffix-label" slot="suffix-label" />
		</Label>
		{#if showImage || imageReal}
			{#if imageReal && !imageSrc}
				<Button
					type="button"
					on:click={deleteImageReal}
					class="absolute -left-2 top-6 z-30 h-7 w-7 rounded-full !p-0 opacity-70 transition-opacity duration-300 hover:opacity-100"
					color="error"
					{disabled}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						role="img"
						class="m-[2px] h-5 w-5"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
						><path
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M18 6L6 18M6 6l12 12"
						/></svg
					>
				</Button>
			{/if}
			<img
				in:fade
				src={imageSrc ? imageSrc : imageReal}
				alt=""
				class="flex h-20 w-20 items-center justify-center border-0 bg-secondary-200 object-cover object-center text-secondary-700"
			/>
		{:else}
			<button
				type="button"
				on:click={openFileUpload}
				in:fade
				class="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-200"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					class="pointer-events-none h-12 w-12 text-secondary-700"
					width="1em"
					height="1em"
					viewBox="0 0 24 24"
					><g
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle
							cx="9"
							cy="9"
							r="2"
						/><path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></g
					></svg
				>
			</button>
		{/if}
	</div>
	<FileInput
		{name}
		{containerClass}
		class={className}
		{error}
		{placeholder}
		{accept}
		{required}
		{disabled}
		on:change
		bind:files
		{helper}
		{size}
		{onClearFiles}
	/>
</div>
