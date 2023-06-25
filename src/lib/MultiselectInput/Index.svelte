<script lang="ts">
	// @ts-nocheck
	import { fly } from 'svelte/transition';
	import TextInput from '../TextInput/Index.svelte';
	import { focusTrap } from 'svelte-focus-trap';
	import type { DataStatus, KeyText, TextInputSize } from '../types';
	import { ChevronDown as ChevronDownIcon } from 'lucide-svelte';
	import { clickOutside } from '$lib/Tools/click-outside';

	let className = '';

	export let data: DataStatus | KeyText[] = [];
	export let name;
	export let show = false;
	export let value: string[] | number[] | boolean[] = [];
	export let label = '';
	export let placeholder = 'Search...';
	export let error = '';
	export let helper = '';
	export { className as class };
	export let containerClass = '';
	export let optionAreaClass = '';
	export let search = false;
	export let required = false;
	export let disabled = false;
	export let disableEsc = false;
	export let size: TextInputSize = 'medium';
	//

	let selectInputElm: HTMLInputElement;
	let container: HTMLElement;

	let searchValue = '';

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === 'Escape' && !disableEsc) {
			container.querySelector('input')?.blur();
			show = false;
		}
	};

	const handleBlur = () => {
		if (
			data.filter((x) => x.text.toLowerCase().indexOf(searchValue.toLowerCase()) > -1).length <=
				0 ||
			value.indexOf(data.find((x) => x.text.toLowerCase() === searchValue.toLowerCase())?.key) > -1
		)
			searchValue = '';
	};
</script>

<label
	bind:this={container}
	class="relative z-[80] block {disabled ? 'cursor-not-allowed' : ''} {containerClass}"
	use:clickOutside
	use:focusTrap
	on:keydown={handleKeyDown}
	on:click_outside={() => (show = false)}
>
	{#if label}
		<div class="mb-1 flex items-center justify-between text-gray-700">
			<div class={disabled ? 'opacity-50' : ''}>
				<span class={error ? 'text-error-600' : ''}>
					{label}
				</span>
				{#if required}
					<span class="text-error-600"> * </span>
				{/if}
			</div>
			<div>
				<slot name="suffix-label" />
			</div>
		</div>
	{/if}
	<div class="relative">
		{#if value.length}
			<div class="absolute left-1.5 top-1.5 rounded-md bg-primary-600 px-2 py-0.5 text-white">
				{value.length}
			</div>
		{/if}
		<TextInput
			{name}
			on:focus={() => (show = true)}
			type="text"
			bind:value={searchValue}
			on:blur={handleBlur}
			on:keydown={(e) => {
				const options = container.querySelectorAll('.select-area > button');
				if (e.code === 'ArrowDown') options[0]?.focus();
				if (e.code === 'ArrowUp') options[options.length - 1]?.focus();
				//
				options.forEach((option, i) => {
					option.addEventListener('keydown', (evt) => {
						evt.stopPropagation();
						if (i === 0 && evt.code === 'ArrowUp') {
							container.querySelector('input')?.focus();
						} else if (i === options.length - 1 && evt.code === 'ArrowDown') {
							container.querySelector('input')?.focus();
						} else {
							if (evt.code === 'ArrowDown') {
								options[i + 1]?.focus();
							}
							if (evt.code === 'ArrowUp') {
								options[i - 1]?.focus();
							}
						}
					});
				});
			}}
			{placeholder}
			class="pr-8 {className} {value.length ? 'pl-10' : ''}"
			autocomplete="off"
			readonly={!search}
			{required}
			{error}
			{helper}
			{disabled}
			{size}
		/>
		<button
			{disabled}
			type="button"
			class="absolute {size === 'small'
				? 'right-1.5 top-1.5'
				: size === 'big'
				? 'right-3  top-4'
				: 'right-2 top-[11px]'} transform outline-none transition-transform duration-200 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-gray-300 {disabled
				? 'cursor-not-allowed opacity-50'
				: ''} {show && '-rotate-180'}"
			on:click={() => (show = !show)}
		>
			<ChevronDownIcon class="h-5 w-5" />
		</button>
	</div>
	<input bind:this={selectInputElm} type="text" {name} bind:value on:change class="hidden" />
	{#if show}
		<div
			transition:fly|local={{ y: -8, duration: 200 }}
			class="select-area absolute left-0 right-0 mt-2 max-h-[208px] space-y-[2px] overflow-y-auto rounded-md bg-white p-1 shadow {optionAreaClass}"
		>
			{#if Array.isArray(data)}
				{#each data.filter((x) => x.text
							.toLowerCase()
							.indexOf(searchValue.toLowerCase()) > -1 || value.indexOf(x.key) > -1) as select}
					<button
						on:click|preventDefault={() => {
							if (value.indexOf(select.key) > -1) {
								value = value.filter((x) => x !== select.key);
							} else {
								value[value.length] = select.key;
							}
							setTimeout(() => {
								selectInputElm.dispatchEvent(new Event('change'));
							}, 10);
						}}
						type="button"
						class="block w-full rounded-md px-2 py-1 text-left outline-none hover:bg-gray-100 focus-visible:bg-gray-200 {value.indexOf(
							select.key
						) > -1 && 'bg-gray-100'}">{select.text}</button
					>
				{:else}
					<div class="block w-full rounded-md py-1 px-2 text-left text-gray-500">No data</div>
				{/each}
			{:else if data === 'loading'}
				<div class="block w-full rounded-md px-2 py-1 text-left text-gray-500">Loading...</div>
			{:else}
				<div class="block w-full rounded-md px-2 py-1 text-left text-error-600">Data error</div>
			{/if}
		</div>
	{/if}
</label>
