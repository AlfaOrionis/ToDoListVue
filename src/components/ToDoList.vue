<template>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.title">
      {{ toDo.id }}, {{ toDo.title }}, {{ toDo.description }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps(["toDoList"]);
</script>
