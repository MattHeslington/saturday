<script>
	import { breadcrumbs } from '$lib/globalStore.js'
	import { ChevronRight } from 'lucide-svelte'
	let bc
	let length
	breadcrumbs.subscribe((value) => {
		bc = value
		length = value.length
	})
</script>

{#if length > 0 && (bc[0].title === 'Home' || bc[0].title === 'Coming Soon')}
	<div />
{:else}
	<ol class="flex items-center space-x-1">
		{#if length >= 1}
			<ChevronRight size={14} class="mt-[2px]" />
		{/if}
		{#each bc as breadcrumb, index}
			{#if breadcrumb.url === null}
				<li class="flex items-center justify-start space-x-1">
					<div class="text-gray-12 pointer-events-none border-b border-transparent text-[17px] tracking-tight">
						{breadcrumb.title}
					</div>
					{#if index < length - 1}
						<ChevronRight size={14} class="mt-[2px]" />
					{/if}
				</li>
			{:else}
				<li class="flex items-center justify-start space-x-1">
					{#if index > 0}
						<ChevronRight size={14} class="mt-[2px]" />
					{/if}
					<a href={breadcrumb.url}>
						<div
							class="text-gray-12 hover:border-gray-12 border-b border-transparent text-[17px] tracking-tight hover:border-dashed">
							{breadcrumb.title}
						</div>
					</a>
				</li>
			{/if}
		{/each}
	</ol>
{/if}
