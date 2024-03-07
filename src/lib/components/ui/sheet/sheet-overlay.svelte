<script>
	import { Dialog as SheetPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	import { fade } from "svelte/transition";
	let className = undefined;
	export { className as class };
	export let transition = fade;
	export let transitionConfig = {
		duration: 150,
	};
</script>

<SheetPrimitive.Overlay
	{transition}
	{transitionConfig}
	class={cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)}
	{...$$restProps}
/>
