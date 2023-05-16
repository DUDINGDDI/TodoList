<template>
    <div>
        <!-- 클래스 바인딩 -->
        <span @click="updateTodo" :class="{ 'is-done': todoItem.done }">{{ todoItem.work }}</span>
        <button @click="deleteTodo">삭제</button>
    </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    props: {
        todoItem: Object,
    },
    methods: {
        updateTodo() {
            this.$store.dispatch('updateTodo', this.todoItem);
        },
        deleteTodo() {
            this.$store.dispatch('deleteTodo', this.todoItem);
        },

    },

};
</script>

<style scoped>
.is-done {
    text-decoration: line-through;
    color: red
}
</style>