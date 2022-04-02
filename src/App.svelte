<script>
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './shared/Tabs.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItems = 'Current Polls';

  // event
  const changeTabs = (e) => {
    activeItems = e.detail;
  };
</script>

<!-- header -->
<Header />

<!-- main -->
<main>
  <h1>Hello Hinjas</h1>
  <Tabs {items} {activeItems} on:changeTabs={changeTabs} />

  {#if activeItems === 'Current Polls'}
    <p>Hello Current Polls</p>
  {:else if activeItems === 'Add New Poll'}
    <CreatePollForm />
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
