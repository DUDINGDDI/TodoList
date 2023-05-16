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
  },
  mutations: {
    //새로고침시 날아가는거 방지위해 localstorage사용
    CREATE_TODO(state, todoItem){
      state.todos.push(todoItem)
    },
    // UPDATE_TODO(state, todoItem){

    // }
  },
  actions: {
    createTodo({commit}, payload){
      commit('CREATE_TODO', payload)
    },
    // updateTodo({commit}, payload){
    //   // commit('UPDATE_TODO' payload)
    // }
  },
  modules: {
  }
})
