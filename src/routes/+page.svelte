<script lang="ts">
	import Alert from '../partitions/Alert.svelte';
	import Button from '../partitions/Button.svelte';
	import CheckboxesInput from '../partitions/CheckboxesInput.svelte';
	import CheckboxInput from '../partitions/CheckboxInput.svelte';
	import DateInput from '../partitions/DateInput.svelte';
	import FileInput from '../partitions/FileInput.svelte';
	import ImageInput from '../partitions/ImageInput.svelte';
	import ImagesInput from '../partitions/ImagesInput.svelte';
	import Modal from '../partitions/Modal.svelte';
	import MultipletextInput from '../partitions/MultipletextInput.svelte';
	import MultiselectInput from '../partitions/MultiselectInput.svelte';
	import Popover from '../partitions/Popover.svelte';
	import SelectInput from '../partitions/SelectInput.svelte';
	import Switch from '../partitions/Switch.svelte';
	import Tab from '../partitions/Tab.svelte';
	import TextInput from '../partitions/TextInput.svelte';
</script>

<svelte:head>
	<title>Sveh UI</title>
</svelte:head>

<div id="ui-demo" class="space-y-4 p-4">
	<div class="mb-4 flex items-center justify-between">
		<h1 class="text-3xl font-medium sm:text-4xl">Sveh UI</h1>
		<div class="flex items-center gap-x-4">
			<a
				href="https://www.npmjs.com/package/sveh-ui"
				target="_blank"
				class="text-primary-800 transition-colors hover:text-gray-500">NPM</a
			>
			<a
				href="https://github.com/harryhdt/Sveh-UI"
				target="_blank"
				class="text-primary-800 transition-colors hover:text-gray-500">Github</a
			>
			<span class="text-gray-500">V0.3.8</span>
		</div>
	</div>
	<div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
		<Alert />
		<Button />
		<TextInput />
		<MultipletextInput />
		<DateInput />
		<FileInput />
		<ImageInput />
		<ImagesInput />
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
