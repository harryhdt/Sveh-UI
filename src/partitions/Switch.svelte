<script lang="ts">
	import { Switch } from '$lib';
	import type { TextInputSize } from '$lib/types';

	let label = 'Hidup ngga';
	let value = '';
	let checked = false;
	let error = '';
	let helper = '';
	let required = false;
	let size: TextInputSize = 'medium';
	let showText = true;
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Switch</h3>
	<div class="my-4 min-h-[150px] max-w-lg bg-gray-100 p-4">
		<Switch name="bali" {value} {label} {error} {helper} {required} {size} {checked} {showText} />
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
			<input type="checkbox" bind:checked />
			<span>Auto check</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={required} />
			<span>Required</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={showText} />
			<span>Show text</span>
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
