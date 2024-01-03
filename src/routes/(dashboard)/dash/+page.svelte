<script>
	import smile from '$lib/images/smile.jpeg';
	import MemberStatus from './MemberStatus.svelte';
	import { onMount } from 'svelte';

	/** @type any[] */
	$: onlinePlayerStats = [];

	onMount(() => {
		async function getOnlinePlayers() {
			const res = await fetch(`/api/players/online`);
			const players = await res.json();
			let newArray = [];
			for (let player of players.online) {
				const response = await fetch(`/api/players/${player}`);
				const onlinePlayer = await response.json();
				newArray.push(onlinePlayer);
			}
			onlinePlayerStats = newArray;
			setTimeout(getOnlinePlayers, 5000);
		}

		getOnlinePlayers();
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
	<div class="mc-font metric-title-box">
		<p class="metric-title">Online</p>
	</div>
	<div class="metric-content-box">
		<div class="metric-content">
			{#if onlinePlayerStats.length > 0}
				{#each onlinePlayerStats as player}
					<MemberStatus {player} />
				{/each}
			{:else}
				<p id="no-one">No players online</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.metric {
		display: flex;
		flex-direction: column;
		border-radius: 10px;
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
