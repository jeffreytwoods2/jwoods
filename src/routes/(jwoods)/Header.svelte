<script>
  import { fade } from "svelte/transition";
  export let menuIsOpen = false;
</script>

<header>
  <nav>
    <div id="brand">
      <a href="/" class="brand-item" id="initials">JW</a>
      <p class="brand-item">Software Developer</p>
      <!-- Hamburger menu icon, hidden on large screens -->
      <i
        id="hamburger"
        class="brand-item fa-solid"
        class:fa-bars={!menuIsOpen}
        class:fa-x={menuIsOpen}
        class:blueBg={menuIsOpen}
        transition:fade
      >
      </i>
    </div>
  </nav>
</header>

<style>
  header {
    display: flex;
    width: 100%;
  }

  nav {
    width: 100%;
    font-size: x-large;
  }

  #brand {
    display: flex;
  }

  .brand-item {
    border: solid black 1px;
    padding: 13px 10px 10px 10px;
    margin: 0;
    flex-grow: 1;
    text-align: center;
  }

  #initials {
    color: blue;
    border-right: none;
  }

  #hamburger {
    border-left: none;
    min-width: 40px;
  }

  .blueBg {
    color: white;
    background-color: blue;
  }
</style>
