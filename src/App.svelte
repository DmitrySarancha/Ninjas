<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import PollList from './components/PollList.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItems = 'Current Polls';

  // event
  const changeTabs = (e) => {
    activeItems = e.detail;
  };

  // custom event
  const formChange = (e) => {
    // close tab 'Add New Poll'
    activeItems = 'Current Polls';
  };
</script>

<!-- header -->
<Header />

<!-- main -->
<main>
  <Tabs {items} {activeItems} on:changeTabs={changeTabs} />

  {#if activeItems === 'Current Polls'}
    <PollList />
  {:else if activeItems === 'Add New Poll'}
    <CreatePollForm on:formChange={formChange} />
  {/if}
</main>

<!-- footer -->
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
