<script>
  export let polls;
</script>

<div class="poll-list">
  {#each polls as item (item.id)}
    <p>{item.question}</p>
  {/each}
  <h1>Pollll</h1>
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
</style>
