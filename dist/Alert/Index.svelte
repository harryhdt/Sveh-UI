<script>import { XIcon } from "lucide-svelte";
import { afterUpdate } from "svelte";
import { createEventDispatcher } from "svelte";
const dispatch = createEventDispatcher();
let className = "";
export let color;
export let message;
export { className as class };
export let closeAble = true;
let onClose = () => {
  alert.remove();
  dispatch("close");
};
const colorize = () => {
  return {
    primary: "bg-primary-100 text-primary-800 hover:bg-primary-50 border-l-4 border-primary-800",
    secondary: "bg-secondary-300 text-primary-900 hover:bg-secondary-50 border-l-4 border-secondary-800",
    success: "bg-success-100 text-success-800 hover:bg-success-50 border-l-4 border-success-800",
    error: "bg-error-100 text-error-800 hover:bg-error-50 border-l-4 border-error-800",
    info: "bg-info-100 text-gray-600 hover:bg-info-50 border-l-4 border-info-800",
    warning: "bg-warning-100 text-warning-900 hover:bg-warning-50 border-l-4 border-warning-800"
  };
};
let colors = colorize();
export let size = "medium";
const sizes = {
  small: "min-h-[2rem] flex items-center p-1 px-2 text-sm",
  medium: "min-h-[2.5rem] flex items-center p-2 text-base",
  big: "min-h-[3rem] flex items-center py-2 px-3 text-lg"
};
const iconSizes = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  big: "w-6 h-6"
};
afterUpdate(() => {
  colors = colorize();
});
let alert;
</script>

<div
	bind:this={alert}
	class="flex items-start rounded-md {sizes[size]} transition-colors duration-300 {colors[
		color
	]} {className}"
>
	<div class="pr-4">
		{message}
	</div>
	{#if closeAble}
		<button
			type="button"
			on:click={onClose}
			class="ml-auto mt-[2px] transition-opacity hover:opacity-75 active:scale-90"
		>
			<XIcon class={iconSizes[size]} />
		</button>
	{/if}
</div>
