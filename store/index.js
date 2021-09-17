import { vuexfireMutations } from 'vuexfire'

export const mutations = {
  editPre (state, {id, name})  {
    state.todos.editId = id
    state.todos.editText = name
  },
  editInit (state) {
    state.todos.editId = ''
    state.todos.editText = ''
  },

  ...vuexfireMutations
}