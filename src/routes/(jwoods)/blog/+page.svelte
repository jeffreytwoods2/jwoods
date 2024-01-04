<script>
	import PostPreview from './PostPreview.svelte';
	import handsome from '$lib/images/hs.webp';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Jeffrey Woods - Blog</title>
	<meta property="og:title" content="Jeffrey's Blog" />
	<meta property="og:url" content="https://jwoods.dev/blog" />
	<meta property="og:image" content={handsome} />
	<meta property="og:description" content="Blog on personal portfolio site for Jeffrey Woods." />
</svelte:head>

<section id="page-header">
	<h2 style="margin: 0; margin-top: 10px">Blog</h2>
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
		I love reading forgotten blogs on obscure personal sites, so I made my own.
	</p>
	<span id="icon-row">
		<i class="fa-solid fa-note-sticky" />
		<i class="fa-solid fa-pencil" />
		<i class="fa-solid fa-book" />
		<i class="fa-solid fa-mug-hot" />
		<i class="fa-solid fa-comments" />
	</span>
</section>

<section id="posts">
	{#each data.articles as article}
		<PostPreview {article} />
	{/each}
</section>

<style>
	#posts {
		padding-inline: 20px;
	}

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
</style>
