<script>
  import Desktop from './lib/Desktop.svelte';
  import Mobile from './lib/Mobile.svelte';
  
  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  const fullscreenHeight = 500;

  const maxWidthDesktop = 1400;
  const minWidthDesktop = 768;

  const maxWidthMobile = 767;
  const minWidthMobile = 375; 

  function handleResize() {
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
  }

  // Add an event listener for window resize
  window.addEventListener('resize', handleResize);

</script>

{#if windowHeight >= fullscreenHeight}
  <main>
    {#if windowWidth >= minWidthMobile && windowWidth <= maxWidthMobile}
      <Mobile />
    {/if}
    {#if windowWidth >= minWidthDesktop && windowWidth <= maxWidthDesktop}
      <Desktop />
    {/if}
  </main>
{/if}



