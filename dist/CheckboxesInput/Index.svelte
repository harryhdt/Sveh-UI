<script>import Label from "../Constants/Label.svelte";
import { ucFirst } from "../Tools/string";
let className = "";
export let name;
export let text = "";
export let value = false;
export let values = [];
export let label = "";
export let error = "";
export let helper = "";
export let required = false;
export let disabled = false;
export { className as class };
export let containerClass = "";
export let optionsClass = "";
export let options = [];
export let valueAsNumber = false;
export let size = "medium";
export let single = void 0;
for (let i = 0; i < options.length; i++) {
  const key = options[i].key;
  options[i].checked = values.indexOf(key) > -1;
}
const handleChecked = (e, i) => {
  const { checked, value: value2 } = e.currentTarget;
  if (checked && !options[i].checked) {
    options[i].checked = true;
    values[values.length] = valueAsNumber ? parseInt(value2) : value2;
  } else {
    options[i].checked = false;
    values = values.filter((x) => x !== (valueAsNumber ? parseInt(value2) : value2));
  }
};
</script>

<div class="block {disabled ? 'cursor-not-allowed opacity-50' : ''} {containerClass}">
	<Label {label} {error} {required}>
		<slot name="suffix-label" slot="suffix-label" />
	</Label>
	<div class="flex flex-wrap items-center {disabled ? 'cursor-not-allowed' : ''} {optionsClass}">
		{#if !single}
			{#each options as option, i}
				<label
					class="mb-2 mr-4 flex flex-shrink-0 items-center {disabled ? 'cursor-not-allowed' : ''}"
					for="{option.key}-{i}"
				>
					<input
						type="checkbox"
						id="{option.key}-{i}"
						{name}
						class="mr-1 {size === 'small'
							? 'p-1'
							: size === 'big'
							? 'p-2.5'
							: 'p-2'} border-0 bg-gray-100 text-primary-600 focus:ring-primary-300 {disabled
							? 'cursor-not-allowed'
							: ''} {className}"
						value={option.key}
						checked={option.checked}
						on:click={(e) => handleChecked(e, i)}
					/>
					<span
						class="{size === 'small'
							? 'text-sm'
							: size === 'big'
							? '-mt-[2px] text-lg'
							: '-mt-px text-base'} ml-[2px] select-none">{option.text}</span
					>
				</label>
			{/each}
		{:else}
			<label
				class="mb-2 mr-4 flex flex-shrink-0 items-center {disabled ? 'cursor-not-allowed' : ''}"
				for={name}
			>
				<input
					type="checkbox"
					id={name}
					{name}
					bind:checked={value}
					class="mr-1 {size === 'small'
						? 'p-1'
						: size === 'big'
						? 'p-2.5'
						: 'p-2'} border-0 bg-gray-100 text-primary-600 focus:ring-primary-300 {disabled
						? 'cursor-not-allowed'
						: ''} {className}"
				/>
				<span
					class="{size === 'small'
						? 'text-sm'
						: size === 'big'
						? '-mt-[2px] text-lg'
						: '-mt-px text-base'} ml-[2px] select-none">{text}</span
				>
			</label>
		{/if}
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
</div>
