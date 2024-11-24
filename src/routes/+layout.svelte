<script lang="ts">
	import Header from '$lib/Header.svelte';
	import '../app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	const { children }: Props = $props();
</script>

<Header />

<main>
	{@render children?.()}
</main>

<svelte:head>
	<style>
		body {
			margin: 0;
			padding: 0;
			font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo,
				sans-serif;
		}
		html,
		body {
			height: 100%;
		}
	</style>
</svelte:head>
