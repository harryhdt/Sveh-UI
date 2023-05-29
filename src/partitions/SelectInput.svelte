<script lang="ts">
	import { SelectInput } from '$lib';
	import type { TextInputSize } from '$lib/types';

	let show = false;
	let value: string | number | boolean = '';
	let label = 'Select bro';
	let placeholder = 'Search...';
	let error = '';
	let helper = '';
	let search = false;
	let required = false;
	let disabled = false;
	let readonly = false;
	let disableEsc = false;
	let size: TextInputSize = 'medium';
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Select Input</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<SelectInput
			data={[
				{
					key: '1',
					text: 'One'
				},
				{
					key: '2',
					text: 'Two'
				},
				{
					key: '3',
					text: 'Three'
				},
				{
					key: '4',
					text: 'Four',
					disabled: true
				},
				{
					key: '5',
					text: 'Five',
					hide: true
				}
			]}
			name="bali"
			{search}
			{show}
			bind:value
			{disabled}
			{placeholder}
			{label}
			{error}
			{helper}
			{required}
			{readonly}
			{size}
			{disableEsc}
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
			<input type="checkbox" bind:checked={readonly} />
			<span>Readonly</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={required} />
			<span>Required</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={disableEsc} />
			<span>Disable esc</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={search} />
			<span>Searchable</span>
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
