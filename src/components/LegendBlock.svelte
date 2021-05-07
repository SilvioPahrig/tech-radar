<script>
  import LegendEntry from "./LegendEntry.svelte";
  import { stored_config, stored_data } from "../stores";

  export let index;
  export let label;

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
    console.log(ringData);
    console.log(rings);
  });
</script>

<div class="legend__block" data-ring={index}>
  <h3 class="legend__blockHeadline">{label}</h3>
  {#each rings as ring, r}
    <ul>
      {#each ring as entry, i}
        <LegendEntry index={i} label={entry.label} />
      {/each}
    </ul>
  {/each}
</div>

<style>
  .legend__blockHeadline {
    color: var(--primary-color);
  }
</style>
