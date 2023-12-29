<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Dropdown from "./Dropdown.svelte";
  import { onMount } from "svelte";
  import "./styles.css";

  /**
	 * @type {boolean}
	 */
  let menuIsOpen;

  onMount(() => {
	let hamburger = document.getElementById("hamburger")
	window.addEventListener("click", (e) => {
		if (menuIsOpen) {
			menuIsOpen = false
		} else if (e.target === hamburger) {
			menuIsOpen = true
		}
	})
  })
</script>

<div id="app">
  <Header bind:menuIsOpen />

  <main>
    {#if menuIsOpen}
	<Dropdown />
    {/if}
    <slot />
  </main>

  <Footer />
</div>

<style>
  #app {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  main {
    background-color: #f5f5f5;
    flex-grow: 1;
    padding-inline: 20px;
    position: relative;
  }
</style>
