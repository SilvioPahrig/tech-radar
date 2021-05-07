<script lang="ts">
  import LegendBlock from './components/LegendBlock.svelte'
  import Radar from "./components/Radar.svelte";
  import {stored_config, stored_data} from "./stores";
  import Header from "./page/Header.svelte";

  export let config;
  export let dataset;

  stored_config.set(config);
  stored_data.set(dataset);

  console.log(config);
  console.log(dataset);
</script>

<main class="main">
  <div class="header">
    <Header title={config.title} />
  </div>

  {#each config.quadrants as quadrant, index}
    <div class="legend">
      <LegendBlock index={index} label={quadrant.name} />
    </div>
  {/each}

  <div class="radar">
    <Radar />
  </div>
</main>

<style>
  :global(:root) {
    --primary-color: #E60023;
    --ci-gray: #695F5F;
  }

  .main {
    display: grid;
    grid-template-areas:
            "header header header header"
            "legend0 radar radar legend1"
            "legend2 radar radar legend3";

    margin: 0 auto;
  }

  .header {
    grid-area: header;
  }

  .legend:nth-of-type(1) {
    grid-area: legend0;
  }

  .legend:nth-of-type(2) {
    grid-area: legend1;
  }

  .legend:nth-of-type(3) {
    grid-area: legend2;
  }

  .legend:nth-of-type(4) {
    grid-area: legend3;
  }

  .radar {
    grid-area: radar;
  }
</style>
