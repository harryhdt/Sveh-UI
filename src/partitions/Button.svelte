<script lang="ts">
	import { Button } from '$lib';
	import type { ButtonAlign, ButtonColor, ButtonSize, ButtonType, ButtonVariant } from '$lib/types';

	let disabled = false;
	let size: ButtonSize = 'medium';
	let variant: ButtonVariant = 'solid';
	let type: ButtonType = 'button';
	let actionText = 'Say Hi!';
	const action = () => (actionText ? alert(actionText) : {});
	let color: ButtonColor = 'primary';
	let align: ButtonAlign = 'left';
	let fullWidth = false;
</script>

<div id="button" class="border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Button</h3>
	<div class="my-4 h-24 max-w-lg bg-gray-100 p-4">
		<Button {size} {variant} {disabled} {color} on:click={action} {align} {fullWidth}>Button</Button
		>
	</div>
	<div class="flex max-w-lg flex-wrap items-start gap-4">
		<div>
			<span>Type</span>
			<select name="size" bind:value={type}>
				<option value="button">Button</option>
				<option value="submit">Submit</option>
				<option value="reset">Reset</option>
			</select>
		</div>
		<div>
			<span>Size</span>
			<select name="size" bind:value={size}>
				<option value="small">Small</option>
				<option value="medium">Medium</option>
				<option value="big">Big</option>
			</select>
		</div>
		<div>
			<span>Variant</span>
			<select name="variant" bind:value={variant}>
				<option value="solid">Solid</option>
				<option value="outlined">Outlined</option>
			</select>
		</div>
		<div>
			<span>Align</span>
			<select name="align" bind:value={align}>
				<option value="left">Left</option>
				<option value="center">Center</option>
				<option value="right">Right</option>
			</select>
		</div>
		<label>
			<input type="checkbox" bind:checked={disabled} />
			<span>Disabled</span>
		</label>
		<label>
			<input type="checkbox" bind:checked={fullWidth} />
			<span>Full width</span>
		</label>
		<div>
			<span>Action</span>
			<select name="variant" bind:value={actionText}>
				<option value="Say Hi!">Say Hi!</option>
				<option value="Say Thanks">Say Thanks</option>
				<option value="">No action</option>
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
	</div>
</div>
