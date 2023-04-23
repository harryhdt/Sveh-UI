<script>let className = "";
export { className as class };
export let development = false;
</script>

<div
	class="{development
		? 'absolute'
		: 'fixed'} inset-x-0 bottom-0 z-[21] inline-flex justify-around overflow-hidden rounded-t-md bg-white shadow md:relative md:z-[1] md:justify-start {className}"
>
	<slot />
</div>
