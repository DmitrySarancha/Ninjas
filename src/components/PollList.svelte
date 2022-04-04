<script>
  import { fade, scale } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import { pollsStore } from '../store/store';
  import PollDetails from './PollDetails.svelte';
</script>

<div class="poll-list">
  {#each $pollsStore as item (item.id)}
    <div animate:flip={{ duration: 300 }} in:fade out:scale|local>
      <PollDetails {item} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    border-radius: 8px;
  }
</style>
