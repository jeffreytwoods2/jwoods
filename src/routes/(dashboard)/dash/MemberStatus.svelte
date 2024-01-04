<script>
	import circle from '$lib/images/circle-solid.svg';
	/**
	 * @type {{ World: string; name: string; posX: string; posY: string; posZ: string; }}
	 */
	export let player;
	let world = '';
	$: switch (player.World) {
		case 'world':
			world = 'Overworld';
			break;
		case 'world_nether':
			world = 'Nether';
			break;
		case 'world_the_end':
			world = 'The End';
			break;
	}
</script>

<div class="online-player">
	<div id="name-block">
		<span id="indicator-wrapper"><img src={circle} alt="Green status indicator" width="16" height="16" id="indicator" /></span>
		<p id="player-name" class="mc-font">{player.name}</p>
	</div>
	<p class="mc-font" id="location">{world} ({player.posX}, {player.posY}, {player.posZ})</p>
</div>

<style>
	.online-player {
		display: grid;
		text-align: center;
		border-radius: 4px;
	}

	#name-block {
		display: flex;
		column-gap: 4px;
		align-items: center;
		margin: auto;
	}

	p {
		display: grid;
		place-items: center;
		margin: 5px;
		font-size: 1.1em;
	}

	#player-name {
		font-size: 1.5em;
		display: inline-block;
		color: #ffff55;
		text-shadow: 2px 2px 4px #000000;
	}

	i {
		color: #7cfc00;
		font-size: 8pt;
		text-shadow: 2px 2px 4px #000000;
	}

	#indicator-wrapper {
		vertical-align: middle;
	}

	#indicator {
		display: inline-block;
		width: 10.67px;
		height: 10.66px;
		filter: drop-shadow(2px 2px 2px #000000);
		vertical-align: middle;
	}

	#location {
		color: white;
		text-shadow: 2px 2px 4px #000000;
	}
</style>
