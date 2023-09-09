<script lang="ts">
	import { ImageInput } from '$lib';
	import type { TextInputSize } from '$lib/types';

	let file: File | string | null = null;
	let placeholder = 'Image lu';
	let label = 'Your image';
	let accept: string | undefined = undefined;
	let error = '';
	let helper = '';
	let required = false;
	let disabled = false;
	let hideRemoveButton = false;
	let onClearFiles: (() => void) | null = null;
	let size: TextInputSize = 'medium';
	let imageReal: string | undefined = undefined;
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Image Input</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<ImageInput
			{file}
			name="bali"
			{disabled}
			{placeholder}
			{label}
			{error}
			{helper}
			{hideRemoveButton}
			{required}
			{accept}
			bind:imageReal
			{size}
			{onClearFiles}
		/>
	</div>
	<div class="flex max-w-lg flex-wrap items-start gap-4">
		<div>
			<span>Size</span>
			<select name="size" bind:value={size}>
				<option value="small">Small</option>
				<option value="medium">Medium</option>
				<option value="big">Big</option>
			</select>
		</div>
		<label>
			<input type="checkbox" bind:checked={disabled} />
			<span>Disabled</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={required} />
			<span>Required</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={hideRemoveButton} />
			<span>Hide Remove</span>
		</label>
		<div class="flex items-center gap-1">
			<span>Placeholder</span>
			<input type="text" bind:value={placeholder} class="w-32" placeholder="@text" />
		</div>
		<div class="flex items-center gap-1">
			<span>Label</span>
			<input type="text" bind:value={label} class="w-32" placeholder="@text" />
		</div>
		<div class="flex items-center gap-1">
			<span>Error</span>
			<input type="text" bind:value={error} class="w-32" placeholder="@text" />
		</div>
		<div class="flex items-center gap-1">
			<span>Helper</span>
			<input type="text" bind:value={helper} class="w-32" placeholder="@text" />
		</div>
		<div class="flex items-center gap-1">
			<span class="flex-shrink-0">Default image</span>
			<input type="text" class="w-full" bind:value={imageReal} placeholder="@link image" />
		</div>
	</div>
</div>
