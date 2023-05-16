<template>
    <div>
        <h2>할일 목록</h2>
        <todo-list-item v-for="todo in todos" :key="todo.work" :todoItem="todo"></todo-list-item>
    </div>
</template>
  
<script>
import TodoListItem from './TodoListItem.vue';


export default {
    name: "TodoList",
    components:{
        TodoListItem,
    },
    computed:{
        todos() {
            return this.$store.state.todos;
        }
    }
};
</script>
  
<style></style>