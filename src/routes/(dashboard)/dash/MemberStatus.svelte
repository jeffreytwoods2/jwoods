<script>
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
		<span><i class="fa-solid fa-circle" /></span>
		<p id="player-name" class="mc-font">{player.name}</p>
	</div>
	<p class="mc-font" id="location">{world} ({player.posX}, {player.posY}, {player.posZ})</p>
</div>
<div class="online-player">
	<div id="name-block">
		<span><i class="fa-solid fa-circle" /></span>
		<p id="player-name" class="mc-font">.TheBigDal6</p>
	</div>
	<p class="mc-font" id="location">{world} ({player.posX}, {player.posY}, {player.posZ})</p>
</div>
<div class="online-player">
	<div id="name-block">
		<span><i class="fa-solid fa-circle" /></span>
		<p id="player-name" class="mc-font">Brobrohibro</p>
	</div>
	<p class="mc-font" id="location">{world} ({player.posX}, {player.posY}, {player.posZ})</p>
</div>
<div class="online-player">
	<div id="name-block">
		<span><i class="fa-solid fa-circle" /></span>
		<p id="player-name" class="mc-font">Jarofomo</p>
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
		color: lawngreen;
		font-size: 8pt;
		text-shadow: 2px 2px 4px #000000;
	}

	#location {
		color: white;
		text-shadow: 2px 2px 4px #000000;
	}
</style>
