<script>import { getContext } from "svelte";
import { createEventDispatcher } from "svelte";
import { TABS } from "./Index.svelte";
const dispatch = createEventDispatcher();
let className = "";
export { className as class };
export let key;
const tab = { key };
const { registerTab, selectTab, selectedTab, defaultKey } = getContext(TABS);
registerTab(tab);
if (defaultKey === tab.key)
  selectTab(tab);
</script>

<button
	class="relative z-[2] {$selectedTab === tab
		? 'z-[3] max-[767px]:text-primary-600 md:bg-white md:shadow'
		: 'md:bg-gray-100'} w-full px-4 pb-2.5 pt-3.5 transition-all duration-300 hover:z-[4] hover:bg-white active:bg-gray-50 sm:w-28 md:w-auto md:flex-auto md:px-5 md:pb-4 md:pt-2.5 md:active:scale-90 md:active:bg-transparent {className}"
	on:click={() => {
		selectTab(tab);
		dispatch('select', {
			tab: tab.key
		});
	}}
>
	<div class="truncate text-sm md:text-base md:font-medium">
		<slot />
	</div>
	{#if $selectedTab === tab}
		<div class="absolute inset-x-0 top-0 h-[2px] bg-primary-600 md:hidden" />
	{/if}
</button>
