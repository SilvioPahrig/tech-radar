<script>
    import {stored_config, stored_data} from "../stores";

    export let entry;

    let color;
    const unsubscribeConfig = stored_config.subscribe((value) => {
        color = value.rings[entry.ring].color;
    });
</script>

<div class="dot" style="--dot-color: {color}">
    <p class="dot__name">{entry.label}</p>
</div>

<style lang="scss">
  .dot {
    border: 1px solid var(--dot-color);
    border-radius: 50%;
    background-color: var(--dot-color);
    width: 24px;
    height: 24px;

    transform-origin: center center;
    transition-property: all;
    transition-duration: .1s;
    transition-timing-function: ease-in-out;

    &:hover {
      .dot__name {
        display: block;
      }
    }
  }

  .dot__name {
    cursor: pointer;
    display: none;
    color: black;
  }
</style>
