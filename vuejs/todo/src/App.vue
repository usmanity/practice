<template>
  <div id="app">
    <todo-list :todos="todos"></todo-list>
  </div>
</template>

<script>
import axios from 'axios'
import TodoList from './components/TodoList'

export default {
  name: 'TodoApp',
  components: {
    TodoList
  },
  data: function () {
    return {
      todos: {}
    }
  },
  mounted: function () {
    var self = this
    axios.get('http://quip-todos.herokuapp.com/get_todos?email=muhammad@usmanity.com')
    .then(function (res, err) {
      self.updateTodos(res.data)
    })
  },
  methods: {
    updateTodos: function (updated) {
      this.todos = updated
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
