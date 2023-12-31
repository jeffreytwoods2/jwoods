<script>
	import smile from '$lib/images/smile.jpeg';
	import MemberStatus from './MemberStatus.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Real Ones MC Server</title>
	<meta property="og:title" content="A Craft server for the real ones." />
	<meta property="og:url" content="https://jwoods.dev/dash" />
	<meta property="og:image" content={smile} />
	<meta property="og:description" content="Dashboard for the mc.jwoods.dev Minecraft server." />
</svelte:head>

<div class="metric">
	<p class="mc-font metric-title">Offline</p>
	<!-- <MemberStatus /> -->
    {#each data.offline as player}
        <p>{player}</p>
    {/each}
</div>

<style>
	.metric {
		border: solid 1px black;
		border-radius: 10px;
		padding: 20px;
		background-color: white;
	}

	.metric-title {
		font-size: 2em;
		text-align: center;
		margin: 0 0 10px;
	}
</style>
