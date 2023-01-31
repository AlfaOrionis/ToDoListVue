<template>
  <div class="container">
    <form class="form">
      <div class="wrapper">
        <label class="wrapper__label">Title</label>
        <input class="wrapper__input" />
      </div>

      <div class="wrapper">
        <label class="wrapper__label">Description</label>
        <textarea @keyup="adjustHeight" class="wrapper__input" />
      </div>

      <div class="wrapper">
        <label class="wrapper__label">Deadline</label>
        <input class="wrapper__input" />
      </div>

      <div class="wrapper">
        <label class="wrapper__label">Important</label>
        <input
          type="checkbox"
          class="wrapper__input wrapper__input--checkbox"
        />
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ToDoForm",
  methods: {
    adjustHeight(e: Event) {
      (e.target as HTMLInputElement).style.height = "auto";
      (e.target as HTMLInputElement).style.height = `${(e.target as HTMLInputElement).scrollHeight}px`;
    },
  },
});
</script>

<style scoped>
.container {
  width: 600px;
  display: flex;
  justify-content: center;
  margin: 20px auto;
  border: black 2px solid;
  border-radius: 15px;
  background: linear-gradient(rgb(255, 0, 225), rgb(208, 255, 0));
}

.form {
  display: flex;
  flex-direction: column;
  width: 90%;
  padding-bottom: 0.5rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  margin: 0.3rem 0;
}

.wrapper__label {
  margin: 0.3rem 0;
  font-family: Hubballi;
  font-size: 1.4rem;
  font-weight: bold;
}

.wrapper__input {
  font-size: 1rem;
  padding: 4px 0 4px 5px;
  border: 2px black solid;
  outline: none;
  border-radius: 5px;
}

.wrapper__input:focus {
  box-shadow: rgb(0, 0, 255) 0px 0px 10px 2px;
}
.wrapper__input--checkbox:focus {
  box-shadow: none;
}

textarea::-webkit-scrollbar {
  width: 0;
}

.wrapper__input--checkbox {
  width: fit-content;
}
</style>
