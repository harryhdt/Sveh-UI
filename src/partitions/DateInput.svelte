<script lang="ts">
	import { DateInput } from '$lib';
	import type { AutocompleteProps, TextInputSize } from '$lib/types';

	let placeholder = 'Pick Date (Time)';
	let label = 'Birthday';
	let autocomplete: AutocompleteProps = 'on';
	let error = '';
	let helper = '';
	let defaultDate = 'November 21, 2024 15:30:45';
	let enableTime = false;
	let required = false;
	let readonly = false;
	let disabled = false;
	let size: TextInputSize = 'medium';
	let suffixLabel = '';
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Date Input</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<DateInput
			name="bali-date"
			{size}
			{enableTime}
			{autocomplete}
			{disabled}
			{placeholder}
			{label}
			{error}
			{helper}
			{readonly}
			{required}
			bind:value={defaultDate}
		>
			<svelte:fragment slot="suffix-label">
				{#if suffixLabel}
					{@html suffixLabel}
				{/if}
			</svelte:fragment>
		</DateInput>
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
		<div>
			<span>Autocomplete</span>
			<select name="align" bind:value={autocomplete}>
				<option value="off">Off</option>
				<option value="on">On</option>
			</select>
		</div>
		<label>
			<input type="checkbox" bind:checked={disabled} />
			<span>Disabled</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={enableTime} />
			<span>Time</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={required} />
			<span>Required</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={readonly} />
			<span>Readonly</span>
		</label>
		<div class="flex items-center gap-1">
			<span>Label</span>
			<input type="text" bind:value={label} class="w-32" placeholder="@text" />
		</div>
		<div class="flex items-center gap-1">
			<span>Default value</span>
			<input type="text" bind:value={defaultDate} class="w-60" placeholder="@text" />
		</div>
		<div class="flex items-center gap-1">
			<span>Suffix label</span>
			<input type="text" bind:value={suffixLabel} class="w-32" placeholder="@html" />
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
