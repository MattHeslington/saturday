<script>
	import { Button } from '$lib/components/ui/button'
</script>

<div class="flex w-full items-center justify-between">
	<h3 class="scroll-m-20 text-2xl font-semibold tracking-tight"><slot /></h3>
	<Button variant="outline">Clear</Button>
</div>
