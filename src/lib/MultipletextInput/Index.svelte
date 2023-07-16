<script lang="ts">
	import Label from '$lib/Constants/Label.svelte';
	import { ucFirst } from '$lib/Tools/string';
	import type { AutocompleteProps, TextInputSize } from '$lib/types';
	import { Button } from '$lib';
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	let className = '';

	// props
	export let values: string[] = [];
	export let name: string;
	export let label = '';
	export let autocomplete: AutocompleteProps = 'on';
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

	let dispatch = createEventDispatcher();
	$: if (values) {
		dispatch('change', { values });
	}
</script>

<label class="block {disabled ? 'cursor-not-allowed opacity-50' : ''} {containerClass}">
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	<div class="space-y-2.5">
		{#each values as value, i}
			<div class="flex items-center gap-2">
				<input
					{name}
					type="text"
					bind:value
					class="w-full resize-none rounded-md border {sizes[
						size
					]} outline-none transition-[box-shadow] duration-100 focus:ring-1 {error
						? 'border-error-600 bg-error-50 text-error-600 placeholder:text-error-300 focus:border-error-600 focus:ring-error-200'
						: 'placeholder:text-gray-400 focus:border-primary-200'}
				{disabled
						? 'cursor-not-allowed border-gray-300 bg-gray-200 text-gray-600 focus:ring-gray-200'
						: 'border-gray-200 bg-gray-50 text-gray-600 focus:ring-gray-200'} {className}"
					placeholder="Write here"
					{autocomplete}
					{required}
					{readonly}
					{disabled}
				/>
				<Button
					on:click={() => (values = values.filter((_, index) => index !== i))}
					color="info"
					{size}
					disabled={readonly || disabled}
					class="flex scale-95 items-center justify-center {size === 'small'
						? '!px-1.5'
						: size === 'medium'
						? '!px-2'
						: '!px-2.5'}"
				>
					<Icon
						icon="lucide:x"
						class={size === 'small' ? 'h-5 w-5' : size === 'medium' ? 'h-6 w-6' : 'h-7 w-7'}
					/>
				</Button>
			</div>
		{/each}
		<Button
			on:click={() => (values[values.length] = '')}
			color="secondary"
			fullWidth
			align="center"
		>
			<Icon icon="lucide:plus" class="mx-auto h-5 w-5" />
		</Button>
	</div>
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
