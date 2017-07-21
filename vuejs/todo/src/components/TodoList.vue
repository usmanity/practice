<template>
  <div class="todo-list">
      <div class="add-new">
        <form class="add-new-form" @click.prevent.self>
          <input type="text" name="new" placeholder="Add new">
          <input type="submit" name="submit" value="Submit">
        </form>
      </div>
      <ul>
        <li v-for="item in todos">
          <label :for="item.id" @click="completeTodo(item.id)">
            <input class="toggle" :name="item.id" type="checkbox" v-model="item.completed">
            <span :class="{done: item.completed}">
              {{ item.text }}
            </span>
          </label>
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Todo',
  props: ['todos'],
  data: function () {
    return {
      filter: ''
    }
  },
  methods: {
    completeTodo: function (id) {
      var formData = new FormData()
      formData.append('email', 'muhammad@usmanity.com')
      formData.append('id', id)
      axios({
        method: 'post',
        url: 'http://quip-todos.herokuapp.com/mark_completed?email=muhammad@usmanity.com',
        data: formData
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    list-style: none;
  }
  .done {
    color: gray;
    text-decoration: line-through;
  }
  input[type="checkbox"] {
    font-size: 36px;
    width: 30px;
    height: 30px;
  }
</style>
