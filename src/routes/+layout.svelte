<script>
	import '../app.pcss'
	import '@fontsource/lato'
	import { ModeWatcher } from 'mode-watcher'
</script>

<ModeWatcher />
<div class="min-h-screen w-screen">
	<slot />
</div>
