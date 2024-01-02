<script>
	import Offline from './Offline.svelte';
	import OldTech from './OldTech.svelte';

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
		{#if data.slug === "code-offline"}
			<Offline />
		{:else}
			<OldTech />
		{/if}
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
