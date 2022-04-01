<script>
  import { createEventDispatcher } from 'svelte';
  const dispatcher = createEventDispatcher();
  export let items, activeItems;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={() => dispatcher('changeTabs', item)}>
        <div class:active={item === activeItems}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .tabs {
    margin-bottom: 40px;
  }
  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li {
    cursor: pointer;
  }
  li:not(:last-child) {
    margin-right: 20px;
  }
  .active {
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
