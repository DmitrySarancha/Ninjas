<script>
  import Button from '../shared/Button.svelte';
  let fields = {
    question: '',
    answerA: '',
    answerB: '',
  };
  let errors = {
    question: '',
    answerA: '',
    answerB: '',
  };

  let valid = false;

  const submitHandel = () => {
    valid = true;

    // validate question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = 'Question must be at 5 characters long';
    } else {
      errors.question = '';
    }

    // validate ansver-a
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = 'Answer A cannot be ampty';
    } else {
      errors.answerA = '';
    }

    // validate answer-b
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = 'Answer B cannot be ampty';
    } else {
      errors.answerB = '';
    }

    if (valid) {
      console.log('valid', fields);
    }
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
    <!-- not valid question -->
    <div class="error">{errors.question}</div>
  </div>

  <div class="form-field">
    <label for="ansver-a">Answer A:</label>
    <input
      type="text"
      name="answer-a"
      id="answer-a"
      bind:value={fields.answerA}
    />
    <!-- not valid answer A -->
    <div class="error">{errors.answerA}</div>
  </div>

  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input
      type="text"
      name="answer-b"
      id="answer-b"
      bind:value={fields.answerB}
    />
    <!-- not valid answer B -->
    <div class="error">{errors.answerB}</div>
  </div>

  <Button flat={true}>Add Poll</Button>
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
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
