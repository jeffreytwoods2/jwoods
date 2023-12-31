<script>
    import Header from "./Header.svelte";
    import "./styles.css";
</script>

<div id="app">
    <Header />
    <main>
        <slot />
    </main>
</div>

<style>
    #app {
        min-height: 100%;
    }

    main {
        padding: 20px;
    }
</style>