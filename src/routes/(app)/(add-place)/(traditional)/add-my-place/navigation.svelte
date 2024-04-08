<script>
	import { page } from '$app/stores'
	import { links } from './navigationLinks.js'
</script>

<nav class="flex h-11 w-full items-center justify-start space-x-6 border-b border-border">
	{#each links as link}
		<a href={link.slug} class="mt-[2px] h-full">
			<div
				class="relative flex h-full items-center justify-start border-b border-transparent text-sm font-bold hover:border-b hover:border-primary {link.slug ===
				$page.url.pathname
					? 'text-primary'
					: 'text-muted-foreground hover:text-primary'}">
				{link.title}
				{#if link.slug === $page.url.pathname}
					<div class="absolute -bottom-[1px] left-0 h-[1px] w-full bg-primary" />
				{/if}
			</div>
		</a>
	{/each}
</nav>
