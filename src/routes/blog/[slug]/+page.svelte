<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<a href="/blog" id="back-arrow"><i class="fa-solid fa-arrow-left" /></a>
<article>
	<div class="blog-title">
		<h1>{data.title}</h1>
		<p>{data.subtitle}</p>
	</div>
	<hr class="index.hr" />
	<time>{data.updated}</time>
	<div class="blog-content">
		{@html data.content}
		<!-- <p>
			You've been meaning to escape this job for years. Between the nepotism, office politics, and
			budget cuts, there's no hope for making it past Assistant to the Regional Manager. You've been
			eyeing web dev for quite some time, and are ready to take the plunge. You're going to learn to
			code.
		</p>
		<p>
			The internet told you not to reinvent the wheel; almost every problem on the web has been
			solved by a framework. Django sounds easy, so you ask Reddit to confirm that you're making the
			right choice before you begin your journey.
		</p>
		<blockquote>
			<p>"Python doesn't scale!"</p>
			<p>"MVC frameworks are dead."</p>
			<p>"Django?? Recruiters will wonder if you can even code!"</p>
		</blockquote>
		<p>
			You remove Django from your computer and wash your hands. Reddit saved you from making the
			mistake of a lifetime; what a relief! Back at square one, you browse through your bookmarks
			and find that meme you liked about real wizards using PHP. That sounds like a plan, so you
			take to Reddit again, this time to discuss some <i>real</i> web technology.
		</p>
		<blockquote>
			<p>"PHP is a fractal of bad design!"</p>
			<p>
				"My old boss made me write PHP once; I needed months of therapy after quitting that job."
			</p>
			<p>"PHP?? But SvelteKit has a docker image now!"</p>
		</blockquote>
		<p>Anyway I'll finish this article later, this website is taking up my whole Christmas break.</p> -->
	</div>
</article>

<style>
	#back-arrow {
		display: inline-block;
		margin: 10px 0px 0px 10px;
		color: #3366ff;
		font-size: 2.5em;
	}

	article {
		padding-inline: 20px;
	}

	.blog-title h1 {
		font-size: 1.75em;
		margin-top: 10px;
	}

	.blog-title p {
		display: block;
		margin-bottom: 0;
		text-align: justify;
		color: #555555;
	}

	.blog-title + hr {
		margin-bottom: 0;
	}

	time {
		margin-top: 0;
		font-size: 0.8em;
		color: #666666;
	}

	.blog-content {
		font-size: 1.1em;
		line-height: 1.5;
	}
</style>
