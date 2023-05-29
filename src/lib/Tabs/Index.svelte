<script context="module">
	export const TABS = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let className = '';
	export { className as class };

	export let defaultKey: string;
	export let development = false;

	let activeTab = defaultKey;

	const tabs: any[] = [];
	const panels: any[] = [];
	const selectedTab = writable({ key: activeTab });
	const selectedPanel = writable({ key: activeTab });

	setContext(TABS, {
		registerTab: (tab: any) => {
			tabs.push(tab);
			selectedTab.update((current) => current || tab);

			onDestroy(() => {
				const i = tabs.indexOf(tab);
				tabs.splice(i, 1);
				selectedTab.update((current) =>
					current === tab ? tabs[i] || tabs[tabs.length - 1] : current
				);
			});
		},

		registerPanel: (panel: any) => {
			panels.push(panel);
			selectedPanel.update((current) => current || panel);
			onDestroy(() => {
				const i = panels.indexOf(panel);
				panels.splice(i, 1);
				selectedPanel.update((current) =>
					current === panel ? panels[i] || panels[panels.length - 1] : current
				);
			});
		},

		selectTab: async (tab: any) => {
			const i = tabs.indexOf(tab);
			selectedTab.set(tab);
			selectedPanel.set(panels[i]);
			dispatch('change', {
				tab: tab.key
			});
		},
		defaultKey,
		selectedTab,
		selectedPanel
	});
</script>

<div class="{development ? 'relative' : ''} {className}">
	<slot />
</div>
