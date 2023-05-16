<template>
    <div>
        <span @click="updateTodo">{{ todoItem.work }}</span>
    </div>
</template>

<script>
export default {
    name: 'TodoListItem',
    props:{
        todoItem: Object,
    },
    methods:{
        updateTodo(){
            this.$store.dispatch('updateTodo', this.todoItem)
        }
    }
    
};
</script>

<style>

</style>