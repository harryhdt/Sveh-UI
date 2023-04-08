<script lang="ts">
	import { XIcon, FileIcon } from 'lucide-svelte';
	import { TextInput } from '$lib';
	import type { TextInputSize } from '$lib/types';

	let className = '';

	// props
	export let name: string;
	export let file: File | null = null;
	export let files: FileList | null = null;
	export let placeholder = '';
	export let label = '';
	export let accept = '';
	export let error = '';
	export let helper = '';
	export let required = false;
	export let disabled = false;
	export let multiple = false;
	export { className as class };
	export let containerClass = '';
	export let onClearFiles: (() => void) | null = null;

	// sizing
	export let size: TextInputSize = 'medium';
	const iconSizes = {
		small: 'w-4 h-4',
		medium: 'w-5 h-5',
		big: 'w-6 h-6'
	};

	const iconTopOffsets = {
		small: label ? 'top-[26px]' : '-top-[2px]',
		medium: label ? 'top-7' : 'top-0',
		big: label ? 'top-[30px]' : 'top-[2px]'
	};

	const deleteFile = () => {
		file = null;
		files = null;
		if (onClearFiles) onClearFiles();
	};

	let labelRef: HTMLElement;
	let fileName = '';

	$: if (files && files.length) {
		if (!multiple) {
			file = files[0];
		}
		fileName = Array.from(files)
			.map((x: File) => x.name)
			.join(', ');
	} else {
		fileName = '';
	}
</script>

<label bind:this={labelRef} class="relative block {containerClass}">
	<input {name} type="file" bind:files class="hidden" {multiple} {required} {disabled} {accept} />
	<div class="relative">
		<TextInput
			{label}
			{required}
			{size}
			name="bebas"
			type="text"
			on:focus={(e) => {
				labelRef.click();
				const target = e?.currentTarget;
				if (target instanceof HTMLElement) {
					target?.blur();
				}
			}}
			readonly
			class="{className} {size === 'small' ? 'px-8' : size === 'big' ? 'px-10' : 'px-9'}"
			placeholder={fileName ? fileName : placeholder}
			{disabled}
			{error}
			{helper}
		>
			<slot slot="suffix-label" name="suffix-label" />
		</TextInput>
		<div
			class="absolute left-0 {iconTopOffsets[size]} p-2.5 {error
				? 'text-error-400'
				: 'text-gray-400'} transition-all duration-300 hover:opacity-70 active:scale-90"
		>
			<FileIcon class={iconSizes[size]} />
		</div>
		{#if files && files.length}
			<button
				type="button"
				class="absolute right-0 {iconTopOffsets[size]} {error
					? 'text-error-600'
					: 'text-gray-600'} p-2.5 transition-all duration-300 hover:opacity-70 active:scale-90"
				on:click={deleteFile}
			>
				<XIcon class={iconSizes[size]} />
			</button>
		{/if}
	</div>
</label>
