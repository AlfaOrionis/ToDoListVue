<template>
  <div class="container">
    <form @submit.prevent="onSubmit" class="form">
      <div class="wrapper">
        <label class="wrapper__label">Title</label>
        <input v-model="title" id="title" class="wrapper__input" />
      </div>

      <div class="wrapper">
        <label class="wrapper__label">Description {{ description }}</label>
        <textarea
          v-model="description"
          @keyup="adjustHeight"
          class="wrapper__input"
        />
      </div>

      <div class="wrapper">
        <label class="wrapper__label">Deadline</label>
        <input type="date" @input="dateHandler" class="wrapper__input" />
      </div>

      <div class="wrapper">
        <input type="time" @input="timeHandler" class="wrapper__input" />
      </div>

      <div class="wrapper">
        <label class="wrapper__label">Important</label>
        <input
          v-model="isImportant"
          type="checkbox"
          id="checkbox"
          class="wrapper__input wrapper__input--checkbox"
        />
      </div>
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, defineProps } from "vue";
import { adjustHeight } from "../tools/tools";

const props = defineProps(["submitHandler"]);

const title = ref("");
const isImportant = ref(false);
const description = ref("");

const deadline = reactive({
  date: "",
  time: "",
});

const dateHandler = (e: Event) => {
  deadline.date = (e.target as HTMLInputElement).value;
};
const timeHandler = (e: Event) => {
  console.log(deadline);
  deadline.time = (e.target as HTMLInputElement).value;
};

const onSubmit = () => {
  props.submitHandler({
    id: 1,
    title: title.value,
    description: description.value,
    date: deadline.date,
    time: deadline.time,
    important: isImportant.value,
  });
};
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
