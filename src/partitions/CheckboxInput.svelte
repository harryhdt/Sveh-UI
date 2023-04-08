<script lang="ts">
	import { CheckboxesInput } from '$lib';
	import type { KeyText, TextInputSize } from '$lib/types';

	let text = 'Sure';
	let value = false;
	let label = '';
	let error = '';
	let helper = '';
	let required = false;
	let disabled = false;
	let valueAsNumber = false;
	let size: TextInputSize = 'medium';
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Checkbox Input</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-200 p-4">
		<CheckboxesInput
			name="bali-ss"
			single
			bind:value
			{text}
			{disabled}
			{label}
			{error}
			{helper}
			{required}
			{valueAsNumber}
			{size}
		/>
		<br />
		<span>Value: {value}</span>
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
