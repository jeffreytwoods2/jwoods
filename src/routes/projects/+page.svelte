<script>
	import truck from '$lib/images/truck.jpg';
	import mc from '$lib/images/mc.jpeg';
</script>

<svelte:head>
	<title>Jeffrey Woods - Projects</title>
	<meta property="og:title" content="Things I've built on the web and IRL." />
	<meta property="og:url" content="https://jwoods.dev/projects" />
	<meta property="og:image" content={truck} />
	<meta property="og:description" content="Project demonstration page for Jeffrey Woods." />
</svelte:head>

<section>
	<section id="page-header">
		<h2 style="margin: 0; margin-top: 10px">Projects</h2>
		<p
			style="
			font-size: large;
			text-align: center;
			padding-inline: 10px;
			margin: 0;
			display: grid;
			place-items: center;
		  "
		>
			An assortment of things that I've tinkered with, both on the web and IRL.
		</p>
		<span id="icon-row">
			<i class="fa-solid fa-robot" />
			<i class="fa-solid fa-wrench" />
			<i class="fa-solid fa-computer" />
			<i class="fa-solid fa-gamepad" />
			<i class="fa-solid fa-car" />
		</span>
	</section>
	<section id="projects">
		<section class="project">
			<div>
				<h3 style="font-size: xx-large; text-align: center">1969 Dodge D100</h3>
				<p class="desc-para">
					I seized two engines and lost all my savings trying to rebuild this beauty, but the
					knowledge and skills I gained throughout the project were priceless. I can't wait to
					rebuild another truck one day.
				</p>
			</div>
			<img class="project-img" id="truck-pic" src={truck} alt="Old Dodge pickup" />
		</section>
		<hr class="project-hr" />
		<section class="project">
			<div>
				<h3 style="font-size: xx-large; text-align: center">Raspberry Pi Server</h3>
				<p class="desc-para">
					After one too many Minecraft Realms hiccups, I decided to host my own server. I bought a
					Pi 4B with 4GB of RAM, spun up a PaperMC server, and built CPU-melting redstone farms with
					my friends.
				</p>
			</div>
			<img
				class="project-img"
				id="mc-pic"
				src={mc}
				width="4032"
				alt="Raspberry Pi with external SSD"
			/>
		</section>
		<hr class="project-hr" />
		<section class="project">
			<div>
				<h3 style="font-size: xx-large; text-align: center">Spanish Toy Story</h3>
				<p class="desc-para">
					Buzz Lightyear speaks smooth, sultry Spanish in his iconic Flamenco scenes in Toy Story 3.
					In this video, I compared how three different voice actors handled the same scene. I
					didn't expect the video to gain much traction, but the day Disney announced Toy Story 4,
					my video's views climbed into the millions. Thanks for the SEO, Disney.
				</p>
			</div>
			<iframe
				width="850"
				height="315"
				src="https://www.youtube.com/embed/bDZcycnhni0?si=JTbdmMps7Z6uVDat"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
			/>
			<hr class="project-hr" />
		</section>
	</section>
</section>

<style>
	#page-header {
		border: black 1px;
		border-style: solid none;
		position: relative;
		text-align: center;
		display: grid;
		gap: 20px;
		background-color: white;
	}

	#icon-row {
		font-size: xx-large;
		color: lightskyblue;
		display: flex;
		align-items: end;
		width: 100%;
		justify-content: space-around;
		margin-bottom: 10px;
	}

	#projects {
		padding-inline: 20px;
	}

	.project-img {
		box-sizing: border-box;
		max-width: 100%;
		border: solid black 1px;
		border-radius: 20px;
		padding: 3px;
	}

	.desc-para {
		text-align: justify;
	}

	.project-hr {
		border: solid 1px lightgray;
		margin-top: 32px;
	}

	iframe {
		max-width: 100%;
	}
</style>
