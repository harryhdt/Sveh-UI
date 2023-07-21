<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate } from 'svelte';
	import Button from '../Button/Index.svelte';
	import FileInput from '../FileInput/Index.svelte';
	import Icon from '@iconify/svelte';
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
								class="w-20 h-20 object-center object-cover bg-secondary-200 flex items-center justify-center text-secondary-700 border-0"
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
								<Icon icon="lucide:x" class="m-[2px] h-5 w-5" />
							</Button>
							<img
								in:fade
								src={image}
								alt=""
								class="w-20 h-20 object-center object-cover bg-secondary-200 flex items-center justify-center text-secondary-700 border-0"
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
				<Icon icon="lucide:image" class="pointer-events-none h-12 w-12 text-secondary-700" />
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
