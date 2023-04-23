<script lang="ts">
	import Alert from '../partitions/Alert.svelte';
	import Button from '../partitions/Button.svelte';
	import CheckboxesInput from '../partitions/CheckboxesInput.svelte';
	import CheckboxInput from '../partitions/CheckboxInput.svelte';
	import FileInput from '../partitions/FileInput.svelte';
	import ImageInput from '../partitions/ImageInput.svelte';
	import Modal from '../partitions/Modal.svelte';
	import MultiselectInput from '../partitions/MultiselectInput.svelte';
	import Popover from '../partitions/Popover.svelte';
	import SelectInput from '../partitions/SelectInput.svelte';
	import Switch from '../partitions/Switch.svelte';
	import Tab from '../partitions/Tab.svelte';
	import TextInput from '../partitions/TextInput.svelte';
</script>

<div id="ui-demo" class="space-y-4 p-4">
	<div class="mb-4 flex items-center justify-between">
		<h1 class="text-4xl font-medium">Sveh UI</h1>
		<span class="text-gray-500">V0.0.1</span>
	</div>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<Alert />
		<Button />
		<TextInput />
		<FileInput />
		<ImageInput />
		<SelectInput />
		<MultiselectInput />
		<CheckboxInput />
		<CheckboxesInput />
		<Switch />
		<Modal />
		<Popover />
		<Tab />
	</div>
</div>

<style>
	:global(body) {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
