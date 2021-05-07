<script>
  import { stored_data } from "../stores";

  export let dataset;

  const unsubscribe = stored_data.subscribe((value) => {
    dataset = value;
  });
</script>

<div class="radar">TODO</div>

<style>
  .radar {
  }
</style>
