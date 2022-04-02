<script>
  import PollDetails from './PollDetails.svelte';
  export let polls;
</script>

<div class="poll-list">
  {#each polls as item (item.id)}
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
