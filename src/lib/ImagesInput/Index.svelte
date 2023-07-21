<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';
	import Button from '../Button/Index.svelte';
	import FileInput from '../FileInput/Index.svelte';
	import type { TextInputSize } from '$lib/types';
	import Label from '$lib/Constants/Label.svelte';

	let className = '';

	export { className as class };
	export let containerClass = '';
	export let files: FileList | null = null;
	export let label = 'Photo';
	export let name = 'photo';
	export let placeholder = 'Select image';
	export let accept = 'image/*';
	export let required = false;
	export let disabled = false;
	export let error = '';
	export let imageReal: string[] | null = null;
	export let deleteImageReal: (i: number) => void = (i) => {
		if (imageReal && imageReal.length) {
			imageReal = imageReal.filter((_, index) => index !== i);
		}
	};
	export let size: TextInputSize = 'medium';
	export let helper = '';
	export let onClearFiles: (() => void) | null = null;

	let showImages: any[] = [];
	let imageSrc: any[] = [];

	// if one only
	$: if (files && files.length) {
		for (let i = 0; i < files.length; i++) {
			const reader = new FileReader();
			reader.addEventListener('load', function () {
				if (reader.result) {
					imageSrc[i] = reader.result.toString();
					showImages[i] = true;
				}
			});
			reader.readAsDataURL(files[i]);
		}
	} else {
		files = null;
		imageSrc = [];
		showImages = [];
	}

	afterUpdate(() => {
		if (!files?.length) {
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
		{#if showImages.length || (imageReal && imageReal.length)}
			<div class="-ml-2 mt-2 flex items-end gap-4 overflow-x-auto pl-2 pt-2">
				{#if showImages.length}
					{#each imageSrc as src, i}
						{#if showImages[i]}
							<img
								in:fade
								{src}
								alt="Preview"
								class="flex h-20 w-20 items-center justify-center border-0 bg-secondary-200 object-cover object-center text-secondary-700"
							/>
						{/if}
					{/each}
				{/if}
				{#if imageReal && imageReal.length}
					{#each imageReal as image, i}
						<div class="relative">
							<Button
								type="button"
								on:click={() => deleteImageReal(i)}
								class="absolute -left-2 -top-2 z-30 h-7 w-7 rounded-full !p-0 opacity-70 transition-opacity duration-300 hover:opacity-100"
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
							<img
								in:fade
								src={image}
								alt=""
								class="flex h-20 w-20 items-center justify-center border-0 bg-secondary-200 object-cover object-center text-secondary-700"
							/>
						</div>
					{/each}
				{/if}
			</div>
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
		on:change
		multiple
		{placeholder}
		{accept}
		{required}
		{disabled}
		bind:files
		{helper}
		{size}
		{onClearFiles}
	/>
</div>
