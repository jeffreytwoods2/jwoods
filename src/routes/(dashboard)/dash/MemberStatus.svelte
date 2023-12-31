<div id="online">
	<div class="online-player">
        <hr />
		<p id="player-name" class="mc-font">Brobrohibro</p>
        <p class="mc-font">Overworld (4024, 128, 3002)</p>
	</div>
	<div class="online-player">
        <hr />
		<p id="player-name" class="mc-font">.TheBigDal6</p>
        <p class="mc-font">Nether (300, 24, -455)</p>
	</div>
	<div class="online-player">
        <hr />
		<p id="player-name" class="mc-font">TheQuestForChex</p>
        <p class="mc-font">End (-64, 18, 10005)</p>
	</div>
</div>

<style>
	#online {
		display: grid;
		gap: 10px;
	}
	.online-player {
		display: grid;
		text-align: center;
	}

    hr {
        width: 100%;
        border: solid 1px lightgray;
    }

	p {
		display: grid;
		place-items: center;
        margin: 5px;
        font-size: 1.1em;
	}

	#player-name {
        font-size: 1.5em;
		/* color: #ffff55; */
		/* text-shadow: 2px 2px 4px #000000; */
	}
</style>
