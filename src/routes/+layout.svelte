<script>
	import '../app.pcss'
	import '@fontsource/lato'
	import { Toaster } from '$lib/components/ui/sonner'
	import { ModeWatcher } from 'mode-watcher'
</script>

<Toaster />
<ModeWatcher />
<div class="min-h-screen w-screen">
	<slot />
</div>
