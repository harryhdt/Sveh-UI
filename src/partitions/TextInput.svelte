<script lang="ts">
	import { TextInput } from '$lib';
	import type { AutocompleteProps, TextInputSize, TypeProps } from '$lib/types';

	let placeholder = 'Halo semua !!!';
	let type: TypeProps;
	let label = 'Name';
	let autocomplete: AutocompleteProps = 'on';
	let error = '';
	let helper = '';
	let required = false;
	let readonly = false;
	let disabled = false;
	let size: TextInputSize = 'medium';
	let suffixLabel = '';
	let rows = 4;
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Text Input</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<TextInput
			name="bali"
			{type}
			{size}
			{autocomplete}
			{disabled}
			{placeholder}
			{label}
			{error}
			{helper}
			{readonly}
			{required}
			{rows}
		>
			<svelte:fragment slot="suffix-label">
				{#if suffixLabel}
					{@html suffixLabel}
				{/if}
			</svelte:fragment>
		</TextInput>
	</div>
	<div class="flex max-w-lg flex-wrap items-start gap-4">
		<div>
			<span>Type</span>
			<select name="size" bind:value={type}>
				<option value="text">Text</option>
				<option value="email">Email</option>
				<option value="password">Password</option>
				<option value="multiline">Multiline</option>
			</select>
		</div>
		{#if type === 'multiline'}
			<div class="flex items-center gap-1">
				<span>Rows</span>
				<input type="number" bind:value={rows} class="w-20" placeholder="@number" />
			</div>
		{/if}
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
