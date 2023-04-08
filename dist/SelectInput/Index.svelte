<script>import { clickOutside } from "../Tools/click-outside";
import { fly } from "svelte/transition";
import { createEventDispatcher } from "svelte";
import TextInput from "../TextInput/Index.svelte";
import { focusTrap } from "svelte-focus-trap";
import { ChevronDown as ChevronDownIcon } from "lucide-svelte";
import Label from "../Constants/Label.svelte";
let className = "";
export let data = [];
export let name;
export let show = false;
export let value = "";
export let label = "";
export let placeholder = "Search...";
export let error = "";
export let helper = "";
export { className as class };
export let containerClass = "";
export let optionAreaClass = "";
export let search = false;
export let required = false;
export let disabled = false;
export let disableEsc = false;
export let size = "medium";
let container;
let realValue = !value ? value : "";
let searchValue = value && Array.isArray(data) ? data.find((x) => x.key == value)?.text : "";
const handleInput = () => {
  value = realValue;
  onChange();
  setTimeout(() => {
    handleSearch();
  }, 1);
};
const handleKeyDown = (e) => {
  if (e.code === "Escape" && !disableEsc) {
    container.querySelector("input")?.blur();
    show = false;
  }
};
const handleSearch = () => {
  if (show && searchValue && Array.isArray(data) && data.map((x) => x.text.toLowerCase()).indexOf(searchValue.toLowerCase()) > -1) {
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
  if (value === realValue)
    searchValue = "";
};
const dispatch = createEventDispatcher();
const onChange = () => {
  dispatch("change");
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
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	<div class="relative">
		<TextInput
			{name}
			on:focus={() => (show = true)}
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
			class="pr-8 {className}"
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
				? 'top-1.5 right-1.5'
				: size === 'big'
				? 'top-4  right-3'
				: 'top-[11px] right-2'} transform outline-none transition-transform duration-200 focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-gray-300 {disabled
				? 'cursor-not-allowed opacity-50'
				: ''} {show && '-rotate-180'}"
			on:click={() => (show = !show)}
		>
			<ChevronDownIcon class="h-5 w-5" />
		</button>
	</div>
	{#if show}
		<div
			transition:fly|local={{ y: -8, duration: 200 }}
			class="select-area absolute right-0 left-0 mt-2 max-h-[208px] space-y-[2px] overflow-y-auto rounded-md bg-white p-1 shadow {optionAreaClass}"
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
						}}
						type="button"
						class="block w-full rounded-md py-1 px-2 text-left outline-none hover:bg-gray-100 focus-visible:bg-gray-200 {(searchValue ===
							select.text ||
							value === select.text) &&
							'bg-gray-100'}">{select.text}</button
					>
				{:else}
					<div class="block w-full rounded-md py-1 px-2 text-left text-gray-500">No data</div>
				{/each}
			{:else if data === 'loading'}
				<div class="block w-full rounded-md py-1 px-2 text-left text-gray-500">Loading...</div>
			{:else}
				<div class="block w-full rounded-md py-1 px-2 text-left text-error-600">Data error</div>
			{/if}
		</div>
	{/if}
</label>
