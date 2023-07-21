<script lang="ts">
	// @ts-nocheck
	import { clickOutside } from '../Tools/click-outside';
	import { trapFocus } from '../Tools/focus-trap';
	import { fly } from 'svelte/transition';
	import TextInput from '../TextInput/Index.svelte';
	import type { DataStatus, KeyText, TextInputSize } from '../types';
	import Icon from '@iconify/svelte';
	import Label from '$lib/Constants/Label.svelte';

	let className = '';

	export let data: DataStatus | KeyText[] = [];
	export let name;
	export let show = false;
	export let value: string | number | boolean = '';
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
	export let readonly = false;
	export let disableEsc = false;
	export let size: TextInputSize = 'medium';
	//
	let selectInputElm: HTMLInputElement;
	let container: HTMLElement;

	let realValue = !value ? value : '';
	let searchValue = value && Array.isArray(data) ? data.find((x) => x.key == value)?.text : '';

	const handleInput = () => {
		value = realValue;
		//
		setTimeout(() => {
			handleSearch();
		}, 1);
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.code === 'Escape' && !disableEsc) {
			container.querySelector('input')?.blur();
			show = false;
		}
		disableScroller(e);
	};

	const disableScroller = (e) => {
		if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(e.code) > -1) {
			e.preventDefault();
		}
	};

	const handleSearch = () => {
		if (
			show &&
			searchValue &&
			Array.isArray(data) &&
			data.map((x) => x.text.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1
		) {
			const val = data.find((x) => x.text.toLowerCase() === searchValue.toLowerCase());
			if (val) {
				value = val.key;
				setTimeout(() => {
					searchValue = val.text;
				}, 1);
			}
		}
	};

	const handleBlur = () => {
		if (value === realValue) searchValue = '';
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
	bind:this={container}
	class="relative z-[80] block {disabled ? 'cursor-not-allowed opacity-50' : ''} {containerClass}"
	use:clickOutside
	on:keydown={handleKeyDown}
	on:click_outside={() => (show = false)}
	use:trapFocus={{ active: show }}
>
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	<div class="relative">
		<TextInput
			on:focus={() => (show = readonly ? false : true)}
			type="text"
			bind:value={searchValue}
			on:input={handleInput}
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
			class="pr-8 {className} {disabled ? '!opacity-100' : ''}"
			autocomplete="off"
			readonly={!search || readonly}
			{required}
			{error}
			{helper}
			{disabled}
			{size}
		/>
		{#if !readonly}
			<button
				{disabled}
				tabindex="-1"
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
				<Icon icon="lucide:chevron-down" class="h-5 w-5" />
			</button>
		{/if}
	</div>
	<input
		bind:this={selectInputElm}
		type="text"
		{name}
		bind:value
		on:change
		class="hidden"
		tabindex="-1"
	/>
	{#if show}
		<div
			transition:fly={{ y: -8, duration: 200 }}
			class="select-area absolute left-0 right-0 mt-2 max-h-[208px] space-y-[2px] overflow-y-auto rounded-md bg-white p-1 shadow {optionAreaClass}"
		>
			{#if Array.isArray(data)}
				{#each data.filter((x) => (value ? x : x.text
								.toLowerCase()
								.indexOf(searchValue.toLowerCase()) > -1)) as select}
					<button
						on:click|preventDefault={() => {
							show = false;
							value = select.key;
							searchValue = data.find((x) => x.key == value)?.text;
							setTimeout(() => {
								selectInputElm.dispatchEvent(new Event('change'));
							}, 10);
						}}
						on:keydown={disableScroller}
						type="button"
						class="block w-full rounded-md px-2 py-1 text-left outline-none hover:bg-gray-100 focus:bg-gray-200 focus-visible:bg-gray-200 {(searchValue ===
							select.text ||
							value === select.text) &&
							'bg-gray-100'}">{select.text}</button
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
