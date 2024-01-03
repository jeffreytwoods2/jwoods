<script>
    import Header from "./Header.svelte";
    import favicon from "$lib/favicons/dash/favicon.ico";
    import appleIcon from "$lib/favicons/dash/apple-touch-icon.png";
    import "./styles.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/x-icon" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="jwoods.dev" />
    <meta name="theme-color" content="#4A6F28" />
	<link rel="apple-touch-icon" href={appleIcon} />
    <link rel="manifest" href="/manifest.webmanifest" type="application/manifest+json">
</svelte:head>

<div id="app">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    #app {
        min-height: 100%;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
    }

    main {
        padding: 20px;
    }
</style>