<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import Dropdown from './Dropdown.svelte';
	import favicon from '$lib/favicons/jwoods/favicon.ico';
	import appleIcon from '$lib/favicons/jwoods/apple-touch-icon.png';
	import { onMount } from 'svelte';
	import './styles.css';

	/**
	 * @type {boolean}
	 */
	let menuIsOpen;

	onMount(() => {
		let hamburger = document.getElementById('hamburger');
		window.addEventListener('click', (e) => {
			if (menuIsOpen) {
				menuIsOpen = false;
			} else if (e.target === hamburger) {
				menuIsOpen = true;
			}
		});
	});
</script>

<svelte:head>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href={favicon} type="image/x-icon" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="jwoods.dev" />
	<link rel="apple-touch-icon" href={appleIcon} />
	<script src="https://kit.fontawesome.com/590500020a.js" crossorigin="anonymous" defer></script>
</svelte:head>

<div id="app">
	<Header bind:menuIsOpen />

	<main>
		{#if menuIsOpen}
			<Dropdown />
		{/if}
		<slot />
	</main>

	<Footer />
</div>

<style>
	#app {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	main {
		background-color: #f5f5f5;
		flex-grow: 1;
		position: relative;
	}
</style>
