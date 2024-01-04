<script>
    import Header from "./Header.svelte";
    import favicon from "$lib/favicons/dash/favicon.ico";
    import appleIcon from "$lib/favicons/dash/apple-touch-icon.png";
    import Splash from "./Splash.svelte";
    import "./styles.css";
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/x-icon" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="jwoods.dev" />
    <meta name="theme-color" content="#4A6F28" />
	<link rel="apple-touch-icon" href={appleIcon} />
    <link rel="manifest" href="/manifest.webmanifest" type="application/manifest+json">
    <meta name="viewport" content="initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover" />
    <Splash />
</svelte:head>

<div id="app">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    #app {
        display: flex;
        flex-direction: column;
        height: 100vh;
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
    }

    main {
        display: flex;
        flex-direction: column;
        overflow: scroll;
        gap: 20px;
        padding: 20px;
        flex-grow: 1;
    }
</style>