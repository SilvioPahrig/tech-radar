<script>
  import {stored_config, stored_data} from "../stores";
  import Dot from "./Dot.svelte";

  export let index;

  let dataset;
  let rings;
  let ringData;

  const unsubscribeConfig = stored_config.subscribe((value) => {
    ringData = value.rings;
  });

  const unsubscribeData = stored_data.subscribe((value) => {
    rings = value
            .filter((item) => item.quadrant === index)
            .reduce((result, item) => {
              if (!result[item.ring]) result[item.ring] = [];
              result[item.ring].push(item);
              return result;
            }, []);
    console.log(rings);
  });
</script>

<div class="quadrant__block" data-ring={index}>
  {#each rings as ring, r}
      {#each ring as entry, i}
        <Dot entry={entry}/>
      {/each}
  {/each}
</div>

<style>
    .quadrant__block {
        display: flex;
        flex-wrap: wrap;
    }
  .legend__blockHeadline {
    color: var(--primary-color);
  }
</style>
