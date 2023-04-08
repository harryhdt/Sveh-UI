<script>export let type = "button";
export let variant = "solid";
export let disabled = false;
export let size = "medium";
const sizes = {
  small: "h-8 px-3 text-sm",
  medium: "h-10 px-5 text-base",
  big: "h-12 px-6 text-lg"
};
export let color = "primary";
const colorize = () => {
  return {
    primary: variant === "outlined" ? "bg-white border border-primary-600 hover:bg-primary-50 active:bg-white text-primary-800" : "bg-primary-600 border border-primary-600 hover:border-primary-600 active:border-primary-600 hover:bg-primary-700 active:bg-primary-600 text-white",
    secondary: variant === "outlined" ? "bg-white border border-secondary-600 hover:bg-secondary-50 active:bg-white text-primary-700" : "bg-secondary-600 border border-secondary-600 hover:border-secondary-600 active:border-secondary-600 hover:bg-secondary-700 active:bg-secondary-600 text-primary-900",
    error: variant === "outlined" ? "bg-white border border-error-600 hover:bg-error-50 active:bg-white text-error-800" : "bg-error-600 border border-error-600 hover:border-error-600 active:border-error-600 hover:bg-error-700 active:bg-error-600 text-white",
    warning: variant === "outlined" ? "bg-white border border-warning-600 hover:bg-warning-50 active:bg-white text-gray-700" : "bg-warning-600 border border-warning-600 hover:border-warning-600 active:border-warning-600 hover:bg-warning-700 active:bg-warning-600 text-gray-700",
    success: variant === "outlined" ? "bg-white border border-success-600 hover:bg-success-50 active:bg-white text-success-800" : "bg-success-600 border border-success-600 hover:border-success-600 active:border-success-600 hover:bg-success-700 active:bg-success-600 text-white",
    info: variant === "outlined" ? "bg-white border border-info-600 hover:bg-info-50 active:bg-white text-gray-800" : "bg-info-600 border border-info-600 hover:border-info-600 active:border-info-600 hover:bg-info-700 active:bg-info-600 text-gray-800"
  };
};
let colors = colorize();
$:
  if (variant)
    colors = colorize();
let className = "";
export { className as class };
export let fullWidth = false;
export let align = "left";
</script>

<div
	class="block {align === 'right'
		? 'text-right'
		: align === 'center'
		? 'text-center'
		: 'text-left'} {disabled ? 'cursor-not-allowed' : ''}"
>
	<button
		{type}
		on:click
		class="rounded {colors[color]} {sizes[size]} font-medium transition-all duration-200 {disabled
			? 'pointer-events-none opacity-50'
			: ''} {fullWidth
			? `block w-full ${
					align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : 'text-left'
			  }`
			: ''} {className}"
		{disabled}
	>
		<slot />
	</button>
</div>
