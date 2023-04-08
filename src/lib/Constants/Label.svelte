<script lang="ts">
	export let label: string;
	export let error: string;
	export let required: boolean;
</script>

{#if label}
	<div class="mb-1 flex items-center justify-between text-gray-700">
		<div>
			<span class="text-sm {error ? 'text-error-600' : ''}">
				{label}
			</span>
			{#if required}
				<span class="text-error-600"> * </span>
			{/if}
		</div>
		<div>
			<slot name="suffix-label" />
		</div>
	</div>
{/if}
