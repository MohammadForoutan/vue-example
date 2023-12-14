<script setup lang="ts">
import { ref } from "vue";
import DashboardLayout from "../../layout/DashboardLayout.vue";

type TTodo = {
  id: number;
  title: string;
  isDone: boolean;
};
const todoTitleInput = ref<string>("");
const todos = ref<TTodo[]>([
  { id: 1, title: "walking", isDone: false },
  { id: 2, title: "Reading", isDone: false },
]);

const addTodo = () => {
  if(todoTitleInput.value === "") return;
  todos.value.push({
    id: todos.value.length + 1,
    title: todoTitleInput.value,
    isDone: false,
  });
  todoTitleInput.value = "";
};
const deleteTodo = (id: number) => {
  todos.value = todos.value.filter((todo) => todo.id !== id);
};
const deleteCompleteTodos = () => {
  todos.value = todos.value.filter((todo) => todo.isDone !== true);
};
const resetTodos = () => {
  todos.value = [];
};
</script>
<template>
  <DashboardLayout>
    <div class="bg-white p-3 max-w-md mx-auto">
      <div class="text-center">
        <h1 class="text-3xl font-bold">ToDo App</h1>
        <div class="mt-4 flex">
          <!-- INPUT -->
          <input
            class="w-80 border-b-2 border-gray-500 text-black"
            type="text"
            v-model="todoTitleInput"
            placeholder="Enter your task here"
          />
          <!-- ADD BUTTON -->
          <button
            @click="addTodo"
            class="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
          >
            <svg
              class="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="12" y1="9" x2="12" y2="15" />
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
      <div class="mt-8">
        <ul>
          <li class="p-2 rounded-lg" v-for="todo in todos">
            <div class="flex align-middle flex-row justify-between">
              <div class="p-2">
                <!-- CHECK -->
                <input
                  type="checkbox"
                  class="h-6 w-6"
                  :value="todo.isDone"
                  :checked="todo.isDone"
                  @change="todo.isDone = !todo.isDone"
                />
              </div>
              <div class="p-2">
                <!-- TODO TEXT -->
                <p
                  class="text-lg text-gray-400"
                  :class="todo.isDone ? 'line-through' : ''"
                >
                  {{ todo.title }}
                </p>
              </div>
              <!-- REMOVE BUTTON -->
              <button
                class="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
                @click="deleteTodo(todo.id)"
              >
                <svg
                  class="h-6 w-6 text-red-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
                <span>Remove</span>
              </button>
            </div>
            <hr class="mt-2" />
          </li>
        </ul>
      </div>
      <div class="mt-8">
        <button
          @click="deleteCompleteTodos"
          class="border-2 border-red-500 p-2 text-red-500"
        >
          Clear Completed Task
        </button>
        <button
          @click="resetTodos"
          class="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
        >
          Reset Todo List
        </button>
      </div>
    </div>
  </DashboardLayout>
</template>
