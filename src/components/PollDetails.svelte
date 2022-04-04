<script>
  import { tweened } from 'svelte/motion';
  import { pollsStore } from '../store/store';
  import Card from '../shared/Card.svelte';
  import Button from '../shared/Button.svelte';

  export let item;

  // reactive value
  $: totalVotes = item.votesA + item.votesB;
  $: percentA = Math.round((100 / totalVotes) * item.votesA) || 0; // NaN or 0
  $: percentB = Math.round((100 / totalVotes) * item.votesB) || 0; // NaN or 0

  // tweened store
  let tweenedA = tweened(0);
  let tweenedB = tweened(0);

  // tweened percent
  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);

  // handelVotes
  const handelVotes = (option, id) => {
    // store
    pollsStore.update((data) => {
      const copiedPolls = [...data];
      const upvotePoll = copiedPolls.find((poll) => poll.id === id);
      if (option === 'a') {
        upvotePoll.votesA++;
      }
      if (option === 'b') {
        upvotePoll.votesB++;
      }
      return copiedPolls;
    });
  };
  // delete poll
  const deletePoll = (id) => {
    // store
    pollsStore.update((data) => {
      return data.filter((item) => item.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <h2>{item.question}</h2>

    <p>Total Voutes: {totalVotes}</p>
    <div class="answer" on:click={() => handelVotes('a', item.id)}>
      <div style:width="{$tweenedA}%" class="percent percent-a" />
      <span>{item.answerA} ({item.votesA})</span>
    </div>
    <div class="answer" on:click={() => handelVotes('b', item.id)}>
      <div style:width="{$tweenedB}%" class="percent percent-b" />
      <span>{item.answerB} ({item.votesB})</span>
    </div>
    <div class="delete">
      <Button on:click={() => deletePoll(item.id)}>Delete Poll</Button>
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
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 3px solid #d91b42;
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 3px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }
  .delete {
    margin-top: 30px;
    text-align: end;
  }
</style>
