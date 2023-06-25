<script lang="ts">
	import { fade } from 'svelte/transition';
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import Button from '../Button/Index.svelte';
	import FileInput from '../FileInput/Index.svelte';
	import { XIcon, ImageIcon } from 'lucide-svelte';
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
					<XIcon class="m-[2px] h-5 w-5" />
				</Button>
			{/if}
			<img in:fade|local src={imageSrc ? imageSrc : imageReal} alt="Preview" class="h-auto w-20" />
		{:else}
			<button
				type="button"
				on:click={openFileUpload}
				in:fade|local
				class="flex h-20 w-20 items-center justify-center rounded-full bg-secondary-200"
			>
				<ImageIcon class="pointer-events-none h-12 w-12 text-secondary-700" />
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
