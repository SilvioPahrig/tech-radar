<script>
  import LegendBlock from './components/LegendBlock.svelte';
  import {stored_config, stored_data} from "./stores";
  import Header from "./page/Header.svelte";
  import Quadrant from "./components/Quadrant.svelte";

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

  {#each config.quadrants as quadrant, index}
    <div class="quadrant">
      <Quadrant index={index} />
    </div>
  {/each}
</main>

<style lang="scss">
  :global(:root) {
    --primary-color: #E60023;
    --ci-gray: #695F5F;
  }

  :global(body) {
    background-color: #ddd;
    padding: 0;
  }

  .main {
    display: grid;
    grid-template-areas:
            "header header header header"
            "legend0 radar0 radar1 legend1"
            "legend2 radar2 radar3 legend3";

    box-shadow: inset 0 0 200px rgba(0, 0, 0, 0.3);
    margin: 0 auto;
    padding: 8px;
  }

  .header {
    grid-area: header;
  }

  .legend {

    &:nth-of-type(1) {
      grid-area: legend0;
    }

    &:nth-of-type(2) {
      grid-area: legend1;
    }

    &:nth-of-type(3) {
      grid-area: legend2;
    }

    &:nth-of-type(4) {
      grid-area: legend3;
    }
  }

  .quadrant {
    &:nth-of-type(1) {
      grid-area: radar0;
    }

    &:nth-of-type(2) {
      grid-area: radar1;
    }

    &:nth-of-type(3) {
      grid-area: radar2;
    }

    &:nth-of-type(4) {
      grid-area: radar3;
    }
  }
</style>
