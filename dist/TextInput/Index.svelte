<script>import Label from "../Constants/Label.svelte";
import { ucFirst } from "../Tools/string";
let className = "";
export let placeholder = "";
export let name;
export let type;
export let value = "";
export let label = "";
export let autocomplete = "on";
export let error = "";
export let helper = "";
export let required = false;
export let readonly = false;
export let disabled = false;
export { className as class };
export let containerClass = "";
export let rows = 4;
export let size = "medium";
const sizes = {
  small: "h-8 px-2 text-sm",
  medium: "h-10 px-3 text-base",
  big: "h-12 px-4 text-lg"
};
</script>

<label class="block {disabled ? 'cursor-not-allowed opacity-50' : ''} {containerClass}">
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	{#if type === 'text'}
		<input
			{name}
			type="text"
			on:input
			on:focus
			on:blur
			on:keydown
			on:keypress
			on:keyup
			on:change
			bind:value
			class="w-full resize-none rounded-md border {sizes[
				size
			]} outline-none transition-[box-shadow] duration-100 focus:ring-1 {error
				? 'border-error-600 bg-error-50 text-error-600 placeholder:text-error-300 focus:border-error-600 focus:ring-error-200'
				: 'placeholder:text-gray-400 focus:border-primary-200'}
				{disabled
				? 'cursor-not-allowed border-gray-300 bg-gray-200 text-gray-600 focus:ring-gray-200'
				: 'border-gray-200 bg-gray-50 text-gray-600 focus:ring-gray-200'} {className}"
			{placeholder}
			{autocomplete}
			{required}
			{readonly}
			{disabled}
		/>
	{:else if type === 'email'}
		<input
			{name}
			type="email"
			on:input
			on:focus
			on:blur
			on:keydown
			on:keypress
			on:keyup
			on:change
			bind:value
			class="w-full resize-none rounded-md border {sizes[
				size
			]} outline-none transition-[box-shadow] duration-100 focus:ring-1 {error
				? 'border-error-600 bg-error-50 text-error-600 placeholder:text-error-300 focus:border-error-600 focus:ring-error-200'
				: 'placeholder:text-gray-400 focus:border-primary-200'}
				{disabled
				? 'cursor-not-allowed border-gray-300 bg-gray-200 text-gray-600 focus:ring-gray-200'
				: 'border-gray-200 bg-gray-50 text-gray-600 focus:ring-gray-200'} {className}"
			{placeholder}
			{autocomplete}
			{required}
			{readonly}
			{disabled}
		/>
	{:else if type === 'password'}
		<input
			{name}
			type="password"
			on:input
			on:focus
			on:blur
			on:keydown
			on:keypress
			on:keyup
			on:change
			bind:value
			class="w-full resize-none rounded-md border {sizes[
				size
			]} outline-none transition-[box-shadow] duration-100 focus:ring-1 {error
				? 'border-error-600 bg-error-50 text-error-600 placeholder:text-error-300 focus:border-error-600 focus:ring-error-200'
				: 'placeholder:text-gray-400 focus:border-primary-200'}
				{disabled
				? 'cursor-not-allowed border-gray-300 bg-gray-200 text-gray-600 focus:ring-gray-200'
				: 'border-gray-200 bg-gray-50 text-gray-600 focus:ring-gray-200'} {className}"
			{placeholder}
			{autocomplete}
			{required}
			{readonly}
			{disabled}
		/>
	{:else if type === 'multiline'}
		<textarea
			{name}
			{rows}
			on:input
			on:focus
			on:blur
			on:keydown
			on:keypress
			on:keyup
			on:change
			bind:value
			class="!h-auto w-full resize-none rounded-md border {sizes[
				size
			]} outline-none transition-[box-shadow] duration-100 focus:ring-1 {error
				? 'border-error-600 bg-error-50 text-error-600 placeholder:text-error-300 focus:border-error-600 focus:ring-error-200'
				: 'placeholder:text-gray-400 focus:border-primary-200'}
				{disabled
				? 'cursor-not-allowed border-gray-300 bg-gray-200 text-gray-600 focus:ring-gray-200'
				: 'border-gray-200 bg-gray-50 text-gray-600 focus:ring-gray-200'} {className}"
			{placeholder}
			{required}
			{readonly}
			{disabled}
		/>
	{/if}
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
</label>
