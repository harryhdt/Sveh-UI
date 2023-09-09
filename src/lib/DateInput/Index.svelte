<script lang="ts">
	import flatpickr from 'flatpickr';
	import Label from '$lib/Constants/Label.svelte';
	import { ucFirst } from '$lib/Tools/string';
	import type { AutocompleteProps, TextInputSize } from '$lib/types';
	import('flatpickr/dist/themes/airbnb.css');

	let className = '';

	// props
	export let placeholder = '';
	export let name: string;
	export let value = '';
	export let label = '';
	export let autocomplete: AutocompleteProps = 'on';
	export let enableTime = false;
	export let altFormat = 'F j, Y';
	export let error = '';
	export let helper = '';
	export let required = false;
	export let readonly = false;
	export let disabled = false;
	export { className as class };
	export let containerClass = '';

	// sizing
	export let size: TextInputSize = 'medium';
	const sizes = {
		small: 'h-8 px-2 text-sm',
		medium: 'h-10 px-3 text-base',
		big: 'h-12 px-4 text-lg'
	};

	let elm: HTMLInputElement;
	let firstInit = true;
	$: if (elm && (enableTime === true || enableTime === false)) {
		setTimeout(
			() => {
				flatpickr(elm, {
					altInput: true,
					altFormat,
					enableTime,
					enableSeconds: enableTime
				});
			},
			firstInit ? 100 : 1
		);
	}

	$: if (enableTime) altFormat = 'F j, Y H:i:S';
	else altFormat = 'F j, Y';
</script>

<label class="block {disabled ? 'cursor-not-allowed opacity-50' : ''} {containerClass}">
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	<input
		bind:this={elm}
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

<style>
	:global(.flatpickr-monthDropdown-months, .cur-year) {
		font-size: 15px !important;
	}
	:global(.numInputWrapper) {
		margin-left: 16px !important;
	}
	:global(.numInputWrapper > span) {
		opacity: 1 !important;
	}
	:global(.flatpickr-day.today:hover, .flatpickr-day.today:focus) {
		background: theme('colors.primary.600') !important;
	}
	:global(
			span.flatpickr-day.today:not(.selected):hover,
			span.flatpickr-day.prevMonthDay.today:not(.selected):hover,
			span.flatpickr-day.nextMonthDay.today:not(.selected):hover
		) {
		border: 1px solid theme('colors.primary.600') !important;
	}
	:global(
			span.flatpickr-day.today:not(.selected),
			span.flatpickr-day.prevMonthDay.today:not(.selected),
			span.flatpickr-day.nextMonthDay.today:not(.selected)
		) {
		border-bottom-color: theme('colors.primary.600') !important;
	}
	:global(.flatpickr-time input) {
		padding-right: 16px !important;
	}
	:global(
			.flatpickr-months .flatpickr-prev-month:hover,
			.flatpickr-months .flatpickr-next-month:hover
		) {
		color: theme('colors.primary.600') !important;
	}
	:global(
			.flatpickr-months .flatpickr-prev-month:hover svg,
			.flatpickr-months .flatpickr-next-month:hover svg
		) {
		fill: theme('colors.primary.600') !important;
	}
</style>
