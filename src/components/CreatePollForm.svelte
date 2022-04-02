<script>
  let fields = {
    question: '',
    'answer-a': '',
    'answer-b': '',
  };

  const submitHandel = () => {
    console.log(fields);
  };
</script>

<form on:submit|preventDefault={submitHandel}>
  <div class="form-field">
    <label for="question">Poll question:</label>
    <input
      type="text"
      name="question"
      id="question"
      bind:value={fields.question}
    />
  </div>

  <div class="form-field">
    <label for="ansver-a">Answer A:</label>
    <input
      type="text"
      name="answer-a"
      id="answer-a"
      bind:value={fields['answer-a']}
    />
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input
      type="text"
      name="answer-b"
      id="answer-b"
      bind:value={fields['answer-b']}
    />
  </div>

  <button>Add Poll</button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 18px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin-bottom: 10px;
    text-align: left;
  }
</style>
