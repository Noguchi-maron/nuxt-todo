<template>
  <div>
    <div v-if="$store.state.editForm">
    <EditForm/>

    </div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span v-if="todo.created">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
          <span :class="{ done: todo.done }">
          {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>
          <button @click="editFormDisplay(todo)">編集</button>
          <button @click="remove(todo.id)">x</button>
        </span>
      </li>
    </ul>
    <div class="form">
      <form @submit.prevent="add">
        <input type="text" v-model="name">
        <button>Add</button>
      </form>
    </div>

    {{ $store.state.todos.editForm }}
  </div>
</template>

<script>
  import moment from 'moment'
  export default {
    data () {
      return {
        name: '',
        done: false,
      }
    },
    created () {
      this.$store.dispatch('todos/init')
    },
    methods: {
      add () {
        this.$store.dispatch('todos/add', this.name)
        this.name = ''
      },
      remove(id) {
        this.$store.dispatch('todos/remove', id)
      },
      editFormDisplay (todo) {
        this.$store.commit('editFormDisplay')
        this.$store.commit('editPre', {id: todo.id, name: todo.name})
      },
      toggle(todo) {
        this.$store.dispatch('todos/toggle', todo)
      },
      
    },
    computed: {
      todos () {
        return this.$store.getters['todos/orderdTodos']
      },
      editFormDis () {
        return this.$store.getters['todos/']
      }
    },
    filters: {
      dateFilter (date) {
        return moment(date).format('YYYY/MM/DD HH:mm:ss')
      }
    }
  }
</script>

<style>
li > span > span.done {
  text-decoration: line-through;
}
</style>
