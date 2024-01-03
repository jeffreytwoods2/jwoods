<script>
	import omen from '$lib/images/omen.webp';
</script>

<header>
	<div id="header-content">
		<a href="/dash"><img src={omen} alt="Logo" /></a>
		<p class="mc-font">Real Ones Only</p>
		<i id="hamburger" class="fa-solid fa-bars" />
	</div>
</header>

<style>
	header {
		border-bottom: solid 1px black;
		width: 100%;
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
	}

	img {
		box-sizing: border-box;
		max-width: 60px;
		padding: 5px;
	}

	p {
		margin: 0;
		display: grid;
		place-items: center;
		flex-grow: 1;
		font-size: 2em;
		color: #ffff55;
	}

	i {
		display: grid;
		place-items: center;
		font-size: 2em;
		color: #efefef;
		width: 60px;
	}
</style>
