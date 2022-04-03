<script>
  import { createEventDispatcher } from 'svelte';
  import Card from '../shared/Card.svelte';

  export let item;
  const dispatch = createEventDispatcher();

  // reactive volue
  $: totalVotes = item.votesA + item.votesB;

  // handelVotes
  const handelVotes = (option, id) => {
    dispatch('votes', { option, id });
  };
</script>

<Card>
  <div class="poll">
    <h2>{item.question}</h2>

    <p>Total Voutes: {totalVotes}</p>
    <div class="answer" on:click={() => handelVotes('a', item.id)}>
      <div class="percent percent-a" />
      <span>{item.answerA}: {item.votesA}</span>
    </div>
    <div class="answer" on:click={() => handelVotes('b', item.id)}>
      <div class="percent percent-b" />
      <span>{item.answerB}: {item.votesB}</span>
    </div>
  </div>
</Card>

<style>
  h2 {
    margin: 0 auto;
    color: #555;
  }
  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    position: relative;
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    transition: opacity 250ms ease;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
</style>
