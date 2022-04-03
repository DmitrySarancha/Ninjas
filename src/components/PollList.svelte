<script>
  import { pollsStore } from '../store/store';
  import PollDetails from './PollDetails.svelte';
</script>

<div class="poll-list">
  {#each $pollsStore as item (item.id)}
    <PollDetails {item} />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
