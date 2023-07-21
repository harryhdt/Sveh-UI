<script lang="ts">
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

	let inputFileElm: HTMLInputElement;

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
	<input
		bind:this={inputFileElm}
		{name}
		type="file"
		bind:files
		on:change
		class="hidden"
		{multiple}
		{required}
		{disabled}
		{accept}
	/>
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
			<svg
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
				role="img"
				class={iconSizes[size]}
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
				><g
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><path
						d="M14 2v6h6"
					/></g
				></svg
			>
		</div>
		{#if files && files.length}
			<button
				type="button"
				class="absolute right-0 {iconTopOffsets[size]} {error
					? 'text-error-600'
					: 'text-gray-600'} p-2.5 transition-all duration-300 hover:opacity-70 active:scale-90"
				on:click={() => {
					inputFileElm.dispatchEvent(new Event('change'));
					deleteFile();
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					role="img"
					class={iconSizes[size]}
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
			</button>
		{/if}
	</div>
</label>
