<script>
    /**
     * @typedef Article
     * @type {object}
     * @property {string} slug - The URL endpoint.
     * @property {string} title - Article title.
     * @property {string} subtitle - Short quip about the topic.
     */

    /** @type {Article} */
	export let article;
</script>

<a href="/blog/{article.slug}">
	<div class="post">
		<h3>{article.title}</h3>
		<p>{article.subtitle}</p>
		<i class="fa-solid fa-arrow-right" />
	</div>
</a>

<style>
	.post {
		box-sizing: border-box;
		box-shadow: 3px 3px #555555;
		max-width: 100%;
		border: solid black 1px;
		border-radius: 20px;
		padding: 10px;
		background-color: white;
		margin-top: 25px;
	}

	h3 {
		margin-top: 0;
		text-align: center;
	}

	p {
		text-align: justify;
		margin-bottom: 0;
	}

	i {
		display: block;
		text-align: end;
		font-size: 1.5em;
		color: blue;
	}
</style>
