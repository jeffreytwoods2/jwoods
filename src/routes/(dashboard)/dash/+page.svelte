<script>
	import smile from '$lib/images/smile.jpeg';
	import Online from './Online.svelte';
	import { onMount } from 'svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	/** @type any[] */
	$: onlinePlayers = data.online.players
	$: onlineError = false

	onMount(() => {
		async function refreshData() {
			// Fetch data for Online props
			try {
				await fetch(`/api/players/online`).then(async (res) => {
					if (res.status !== 200) {
						throw "Error retrieving players, moving on"
					}
					onlinePlayers = await res.json()
					onlineError = false
				});
			} catch (err) {
				console.log(err);
				onlineError = true;
			}
			
			setTimeout(refreshData, 3000);
		}

		refreshData();
	});
</script>

<svelte:head>
	<title>Real Ones MC Server</title>
	<meta property="og:title" content="A Craft server for the real ones." />
	<meta property="og:url" content="https://jwoods.dev/dash" />
	<meta property="og:image" content={smile} />
	<meta property="og:description" content="Dashboard for the mc.jwoods.dev Minecraft server." />
</svelte:head>

<div class="metric">
	<div class=" metric-title-box">
		<p class="metric-title">Online</p>
	</div>
	<div class="metric-content-box">
		<div class="metric-content">
			{#if onlineError}
				<p id="no-one">Error getting players</p>
			{:else}
				{#if onlinePlayers.length > 0}
					{#each onlinePlayers as player}
						<Online {player} />
					{/each}
				{:else}
					<p id="no-one">No players online</p>
				{/if}
			{/if}
		</div>
	</div>
</div>

<style>
	.metric {
		display: flex;
		flex-direction: column;
		border-radius: 10px;
		background-color: #8b8b8b;
		background-image: url('/src/lib/images/stone.png');
		box-shadow: 4px 4px 3px;
	}

	.metric-title {
		font-size: 2em;
		text-align: center;
		margin: 0;
		padding: 10px;
		color: white;
		text-shadow: 2px 2px 4px #000000;
	}
	.metric-content {
		display: grid;
		gap: 10px;
		margin-bottom: 10px;
	}

	#no-one {
		color: white;
		text-align: center;
		margin: 15px 0 0;
		font-size: x-large;
		text-shadow: 2px 2px 4px #000000;
	}
</style>
