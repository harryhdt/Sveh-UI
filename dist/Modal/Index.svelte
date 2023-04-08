<script>import { focusTrap } from "svelte-focus-trap";
import { fade } from "svelte/transition";
let className = "";
export let show = false;
export let disableEsc = false;
export { className as class };
export let onClose = () => {
};
const handleKeyDown = (e) => {
  if (e.code === "Escape" && !disableEsc) {
    closeModal();
  }
};
const closeModal = () => {
  show = false;
  onClose();
};
const toggleShow = () => show = !show;
let element;
$:
  if (show && element) {
    element.querySelector("button")?.focus();
  }
</script>

<slot name="button" {toggleShow} />
{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:focusTrap
		bind:this={element}
		on:keydown={handleKeyDown}
		class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 backdrop-blur-sm sm:items-start sm:pt-4 {className}"
		style="z-index: 9992;"
		transition:fade|local={{ duration: 200 }}
		on:click|self={closeModal}
	>
		<button class="absolute opacity-0" />
		<slot {toggleShow} />
	</div>
{/if}
