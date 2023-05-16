<template>
  <div id="app">
    <h2>우리의 할일</h2>
    <h4>전체 Todo : {{ allCount }}</h4>
    <h4>완료 Todo : {{ doneCount }}</h4>
    <h4>미완 Todo : {{ undoneCount }}</h4>
    <todo-write></todo-write>
    <hr />
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from '@/components/TodoList.vue'
import TodoWrite from '@/components/TodoWrite.vue'


export default {
  name: 'App',
  components: {
    TodoList,
    TodoWrite,
  },
  computed:{
    allCount(){
      return this.$store.state.todos.length
    },
    doneCount(){
      return this.$store.getters.doneCount
    },
    undoneCount(){
      return this.$store.getters.undoneCount
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
