import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    //전체할일 관리
    todos: []
  },
  getters: {
    doneCount(state){
      let cnt = 0;
      for(let i = 0; i<state.todos.length; i++){
        if(state.todos[i].done){
          cnt++;
        }
      }
      return cnt;
    },
    undoneCount(state){
      let cnt = 0;
      for(let i = 0; i<state.todos.length; i++){
        if(!state.todos[i].done){
          cnt++;
        }
      }
      return cnt;
    }
  },
  mutations: {
    //새로고침시 날아가는거 방지위해 localstorage사용
    CREATE_TODO(state, todoItem){
      state.todos.push(todoItem)
    },
    UPDATE_TODO(state, todoItem){
      const idx = state.todos.indexOf(todoItem)
      state.todos[idx].done = !state.todos[idx].done;
    },
    DELETE_TODO(state, todoItem){
      const idx = state.todos.indexOf(todoItem)
      state.todos.splice(idx, 1)
    }
  },
  actions: {
    createTodo({commit}, payload){
      commit('CREATE_TODO', payload)
    },
    updateTodo({commit}, payload){
      commit('UPDATE_TODO', payload)
    },
    deleteTodo({commit}, payload){
      if(confirm("정말로 지울꺼니?")){
        commit('DELETE_TODO', payload)
      }
    }
  },
  modules: {
  }
})
