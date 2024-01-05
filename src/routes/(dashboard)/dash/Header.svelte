<script>
	import omen from '$lib/images/omen.webp';
	import bars from "$lib/images/bars-solid.svg";
</script>

<header>
	<div id="header-content">
		<a href="/dash"><img src={omen} width="180" height="180" alt="Logo" id="logo" /></a>
		<p class="">Real Ones Only</p>
		<img src={bars} alt="Menu button" height="16" width="14" id="menu" />
	</div>
</header>

<style>
	header {
		border-bottom: solid 1px black;
		width: 100%;
		background-color: #5B8B32;
		background-image: url('/src/lib/images/grass.jpeg');
		background-size: cover;
		box-shadow: 0 1px 3px black;
		z-index: 1;
	}

	#header-content {
		display: flex;
		text-shadow: 2px 2px 4px #000000;
		padding-top: env(safe-area-inset-top);
	}

	a {
		color: inherit;
		text-decoration: none;
		height: 60px;
	}

	#logo {
		box-sizing: border-box;
		max-width: 60px;
		height: auto;
		padding: 5px;
	}

	p {
		margin: 0;
		display: grid;
		place-items: center;
		flex-grow: 1;
		font-size: 2em;
		color: #ffff55;
		text-align: center;
	}

	#menu {
		width: 60px;
		height: 60px;
		color: #efefef;
		padding-inline: 16px;
		padding-block: 14px;
		box-sizing: border-box;
		filter: drop-shadow(2px 2px 2px #000000);
	}
</style>
