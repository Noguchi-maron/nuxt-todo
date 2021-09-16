<template>
  <section class="container">
    <section class="edit-modal">
      <div class="edit-form">
      <form @submit.prevent="edit(id, text)">
        <textarea v-model="text"></textarea>
        <button>保存</button>
      </form>
      </div>
    </section>
    <div class="mask"></div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      text: ''
    }
  },
  created () {
    this.id = this.$store.state.editId
    this.text = this.$store.state.editText
  },
  methods: {
    edit(id, text) {
      this.$store.dispatch('todos/edit', {id: id, text: text})
      this.$store.commit('editInit')
      this.$store.commit('editFormHidden')
    },
    
  }
}
</script>

<style>
.edit-modal {
  background-color: white;
  width: 500px;
  height: 300px;
  border-radius: 10px;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10;
}

.edit-form {
  width: 300px;
  margin: 50px auto;
  }

.edit-form textarea {
  width: 300px;
  height: 150px;
}

.edit-form button {
  display: block;
  margin-left: auto;
}

.mask {
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
