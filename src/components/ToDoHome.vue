<template>
  <ToDoForm :submitHandler="submitHandler" />
  <ToDoList :toDoList="toDoList" />
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import ToDoForm from "./ToDoForm.vue";
import ToDoList from "./ToDoList.vue";

interface toDo {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
}

const toDoList: Ref<toDo[]> = ref([
  { id: 1, title: "XD2", description: "awd", date: "21-12-01", time: "22:22" },
]);

const submitHandler = (toDo: toDo) => {
  toDoList.value.push(toDo);
  console.log(toDoList.value);
};
</script>
