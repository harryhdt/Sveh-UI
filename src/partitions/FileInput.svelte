<script lang="ts">
	import { FileInput } from '$lib';
	import type { TextInputSize } from '$lib/types';

	let files: FileList | null = null;
	let placeholder = 'File lu';
	let label = 'Your file';
	let accept = '';
	let error = '';
	let helper = '';
	let required = false;
	let disabled = false;
	let multiple = false;
	let onClearFiles: (() => void) | null = null;
	let size: TextInputSize = 'medium';
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">File Input</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<FileInput
			{files}
			name="bali"
			{disabled}
			{placeholder}
			{label}
			{error}
			{helper}
			{required}
			{accept}
			{multiple}
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
	</div>
</div>
