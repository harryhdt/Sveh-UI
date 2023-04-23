<script lang="ts">
	import { Alert } from '$lib';
	import type { ColorProps, TextInputSize } from '$lib/types';

	let color: ColorProps = 'primary';
	let message = 'Ini alert';
	let closeAble = true;
	let size: TextInputSize = 'medium';
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Alert</h3>
	<div class="my-4 min-h-[120px] max-w-lg bg-gray-100 p-4">
		<Alert {color} {size} {message} {closeAble} />
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
			<span>Color</span>
			<select name="variant" bind:value={color}>
				<option value="primary">Primary</option>
				<option value="secondary">Secondary</option>
				<option value="error">Error</option>
				<option value="success">Success</option>
				<option value="warning">Warning</option>
				<option value="info">Info</option>
			</select>
		</div>
		<label>
			<input type="checkbox" bind:checked={closeAble} />
			<span>Closeable</span>
		</label>
		<div class="flex items-center gap-1">
			<span>Message</span>
			<input type="text" class="w-full" bind:value={message} placeholder="@text" />
		</div>
	</div>
</div>
