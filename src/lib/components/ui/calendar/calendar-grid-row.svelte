<script>
	import { Calendar as CalendarPrimitive } from "bits-ui";
	import { cn } from "$lib/utils";
	let className = undefined;
	export { className as class };
</script>

<CalendarPrimitive.GridRow class={cn("flex", className)} {...$$restProps}>
	<slot />
</CalendarPrimitive.GridRow>
