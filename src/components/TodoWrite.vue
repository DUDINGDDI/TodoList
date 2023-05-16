<template>
    <div>
        <h2>할일 작성</h2>
        <input type="text" v-model.trim="work" @keyup.enter="createTodo" ref="todoInput" />
        <button @click="createTodo">등록</button>
    </div>
</template>

<script>
export default {
    name: "TodoWrite",
    data() {
        return {
            work: '',
        }
    },
    methods: {
        createTodo() {
            const todoItem = {
                work: this.work,
                done: false,
            };

            //유효성 검사(아무것도 안적었을때)
            if (this.work) {
                this.$store.dispatch("createTodo", todoItem);
                this.work = '';
            } else {
                alert('내용을 입력해주세요');
                this.$refs.todoInput.focus();
            }
        }
    },
};
</script>

<style></style>