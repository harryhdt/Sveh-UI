<script>import Label from "../Constants/Label.svelte";
import { ucFirst } from "../Tools/string";
let className = "";
export let name;
export let label;
export let value = "";
export let checked = false;
export { className as class };
export let error = "";
export let helper = "";
export let required = false;
export let disabled = false;
export let readonly = false;
export let containerClass = "";
export let optionsClass = "";
export let showText = true;
export let size = "medium";
const sizes = {
  small: "h-5 w-9 after:top-[2px] after:left-[2px] after:h-4 after:w-4",
  medium: "h-6 w-11 after:top-[2px] after:left-[2px] after:h-5 after:w-5",
  big: "h-7 w-[52px] after:top-[2px] after:left-[2px] after:h-6 after:w-6"
};
</script>

<div class="block {disabled ? 'cursor-not-allowed opacity-50' : ''} {containerClass}">
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	<label
		class="relative inline-flex cursor-pointer items-center {optionsClass} {readonly
			? 'pointer-events-none'
			: ''}"
	>
		<input
			type="checkbox"
			{name}
			class="peer sr-only {className}"
			{value}
			bind:checked
			{disabled}
		/>
		<div
			class="peer {sizes[
				size
			]} rounded-full bg-gray-200 after:absolute after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary-600 peer-checked:after:translate-x-full peer-checked:after:border-white dark:border-gray-300 dark:bg-gray-200"
		/>
		{#if showText}
			<span
				class="ml-2 select-none {size === 'small'
					? 'text-sm'
					: size === 'big'
					? 'text-lg'
					: 'text-base'}"
			>
				{checked ? 'On' : 'Off'}
			</span>
		{/if}
	</label>
	{#if error || helper}
		<div class="mt-1 flex flex-col">
			{#if helper}
				<span class="text-sm font-light text-gray-400">{ucFirst(helper)}</span>
			{/if}
			{#if error}
				<span class="text-sm text-error-600">{ucFirst(error)}</span>
			{/if}
		</div>
	{/if}
</div>
