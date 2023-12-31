<script>
	import Logo from './Logo.svelte';
</script>

<header>
	<Logo />
	<p class="mc-font">TheQuestForChex</p>
	<i id="hamburger" class="fa-solid fa-bars" />
</header>

<style>
	header {
		border-bottom: solid 1px black;
		display: flex;
		width: 100%;
		background-color: #3eae30;
		box-shadow: 0 2px 2px gray;
	}

	p {
		margin: 0;
		display: grid;
		place-items: center;
		flex-grow: 1;
		font-size: 1.6em;
		border-inline: solid 1px black;
		color: #FFFF55;
		text-shadow: 2px 2px 4px #000000;
	}

	i {
		display: grid;
		place-items: center;
		width: 60px;
		font-size: 2em;
	}
</style>
