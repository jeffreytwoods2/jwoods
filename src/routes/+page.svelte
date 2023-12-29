<script>
	import handsome from '$lib/images/hs.webp';
	import face from '$lib/images/face.jpeg';
</script>

<svelte:head>
	<title>Jeffrey Woods - Home</title>
	<meta property="og:title" content="The #1 resource for handsome people." />
	<meta property="og:url" content="https://jwoods.dev" />
	<meta property="og:image" content={handsome} />
	<meta property="og:description" content="Personal portfolio site for Jeffrey Woods." />
</svelte:head>

<section id="about">
	<img src={face} width="800" alt="Face shot of Jeffrey Woods" id="face" />
	<p id="full-name">
		Jeffrey <span style="color: blue">Woods</span>
	</p>
	<div id="contact-icons">
		<a href="https://github.com/jeffreytwoods2"><i class="fa-brands fa-github" /></a>
		<a href="mailto:jeffreytwoods2@icloud.com"><i class="fa-solid fa-envelope" /></a>
		<a href="https://www.linkedin.com/in/jeffrey-woods/"><i class="fa-brands fa-linkedin" /></a>
	</div>
	<p id="my-tagline">
		I'm a student of Computer Science at Utah Valley University, currently working on our school's
		AI chatbot.
	</p>
	<hr class="index-hr" />
	<section id="roles">
		<div class="role">
			<div class="role-title-date">
				<span class="role-title">Student Developer</span>
				<span class="role-date">2023 - Present</span>
			</div>
			<div class="role-company">
				<span>Utah Valley University</span>
				<span>Orem, UT</span>
			</div>
			<p>
				We're building an Azure AI-powered chatbot to provide 24/7 tutoring services and help
				students stay on top of their coursework.
			</p>
		</div>
		<div class="role">
			<div class="role-title-date">
				<span class="role-title">Software Intern</span>
				<span class="role-date">Summer 2022</span>
			</div>
			<div class="role-company">
				<span>Breeze Airways</span>
				<span>Salt Lake City, UT</span>
			</div>
			<p>
				Airline startup with lots of greenfield apps. Used Angular to write much of the airline's
				Gate Information Display, which shows flight details for the plane parked at each gate.
			</p>
		</div>
		<div class="role">
			<div class="role-title-date">
				<span class="role-title">Full Stack Intern</span>
				<span class="role-date">Summer 2021</span>
			</div>
			<div class="role-company">
				<span>Arivo</span>
				<span>West Valley, UT</span>
			</div>
			<p>
				Earned my backend chops here at the FinTech arm of Ken Garff Auto. Using Go and pure SQL, I
				worked closely with stakeholders to squash bugs and implement new features as requested.
			</p>
		</div>
	</section>
  <hr />
</section>

<style>
	#about {
		padding-inline: 20px;
	}
	
	#face {
		display: block;
		margin: auto;
		margin-top: 15px;
		box-sizing: border-box;
		max-width: 150px;
		border: solid black 1px;
		border-radius: 50%;
		padding: 3px;
	}

	#full-name {
		text-align: center;
		font-size: 2em;
		margin-top: 10px;
		margin-bottom: 10px;
	}

	#my-tagline {
		margin-top: 10px;
		font-size: 1.3em;
		text-align: justify;
	}

  hr {
    border: solid 1px lightgray;
  }

	#roles {
		display: grid;
		gap: 20px;
		margin-top: 20px;
	}

	.role-title-date {
		display: grid;
		grid-auto-flow: column;
		place-items: center;
		justify-content: space-between;
	}

	.role-title,
	.role-date {
		font-size: 1.2em;
		margin-bottom: 0;
	}

	.role-company {
		display: flex;
		justify-content: space-between;
		margin-top: 3px;
		color: #777777;
	}

	#contact-icons {
		display: flex;
		margin: auto;
		justify-content: space-between;
		font-size: 2.5em;
		width: 250px;
		color: #3366ff;
	}
</style>
