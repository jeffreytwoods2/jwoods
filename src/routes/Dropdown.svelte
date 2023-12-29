<script>
  import { slide } from "svelte/transition";
</script>

<div id="dropdown-menu" transition:slide>
  <a href="/" id="about-link">About</a>
  <hr class="menu-hr" />
  <a href="projects.html" id="projects-link">Projects</a>
  <hr class="menu-hr" />
  <a href="blog.html" id="blog-link">Blog</a>
</div>

<style>
  #dropdown-menu {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 3em;
    background-color: white;
    width: 100%;
    max-height: 300px;
    box-sizing: border-box;
    padding: 16px;
    z-index: 1;
    transition: all 0.5s ease-in-out;
  }

  #dropdown-menu a {
    display: block;
  }
</style>
