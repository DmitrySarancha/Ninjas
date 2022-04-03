import { writable } from 'svelte/store';

export const pollsStore = writable([
  {
    id: 1,
    question: 'Vue or React?',
    answerA: 'vue...',
    answerB: 'only React!',
    votesA: 0,
    votesB: 0,
  },
]);
