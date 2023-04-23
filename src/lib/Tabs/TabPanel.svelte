<script lang="ts">
	import { getContext } from 'svelte';
	import { TABS } from './Index.svelte';

	let className = '';
	export { className as class };

	export let key: string;
	export let development = false;

	const panel = { key };
	const { registerPanel, selectedPanel, selectedTab } = getContext(TABS) as any;
	registerPanel(panel);
	//
	if ($selectedTab.key === panel.key) $selectedPanel = panel;
</script>

{#if $selectedPanel === panel}
	<div
		class="z-20 max-h-[calc(100vh-55.5px-32px-114px)] overflow-y-auto rounded-md bg-white p-4 md:relative md:z-[2] md:-mt-[6px] md:max-h-[calc(100vh-55.5px-74px)] md:rounded-tl-none md:shadow-sm {className} {development
			? 'pb-16 md:pb-4'
			: ''}"
	>
		<slot />
	</div>
{/if}
