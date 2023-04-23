<script lang="ts">
	import { Tab, TabList, TabPanel, Tabs } from '$lib';
</script>

<div id="tab" class="relative border border-gray-200 bg-gray-50 p-4">
	<h3 class="text-2xl font-bold">Tab</h3>
	<div class="my-4 min-h-[120px] max-w-lg bg-gray-100 p-4">
		<Tabs development defaultKey="users">
			<TabList development>
				<Tab key="users">Users</Tab>
				<Tab key="roles">Roles</Tab>
				<Tab key="permissions">Permissions</Tab>
			</TabList>
			<TabPanel development key="users">user</TabPanel>
			<TabPanel development key="roles">role</TabPanel>
			<TabPanel development key="permissions">permission</TabPanel>
		</Tabs>
	</div>
	<div class="flex max-w-lg flex-wrap items-start gap-4">No Controller</div>
</div>
